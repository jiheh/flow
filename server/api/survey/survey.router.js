/* eslint-disable arrow-body-style */

'use strict';

// eslint-disable-next-line new-cap
const router = require('express').Router();

const _ = require('lodash');

const db = require('../../_db');
const Promise = require('bluebird');

const Survey = require('./survey.model');
const Channel = require('../channel/channel.model');
const Admin = require('../admin/admin.model');
const User = require('../user/user.model');
const Question = require('../question/question.model');
const UserInfo = require('../userInfo/userInfo.model');
const Response = require('../response/response.model');

// POST - CHROME - pull surveys linked to specific user
router.post('/chrome', (req, res, next) => {
  const { hash } = req.body;

  return User.findOne({
    where: { hash },
    include: [{
      model: Survey,
      through: 'Survey-Participant',
      include: [{
        model: Question,
      }],
    }],
  })
    .then((user) => {
      if (!user) { throw new Error('User not found.'); }

      const { surveys } = user;
      res.json(surveys);
    })
    .catch(next);
});

// POST - admin creates survey
// survey status defaults to "inactive"
router.post('/', (req, res, next) => {
  const {
    channelId, // number
    userIds, // array of numbers
    name, // string - survey name
    description, // string - survey description
  } = req.body;

  if (!req.user) { res.status(403).send(); }

  // eslint-disable-next-line no-unused-vars
  db.transaction((t) => {
    let channel;
    let survey;
    let admin;
    return Promise.all([
      Channel.findById(channelId)
        .then((foundChannel) => {
          if (!foundChannel) { throw new Error('ChannelItem not found.'); }
          channel = foundChannel;
        }),
      Admin.findOne({
        where: {
          user_info_id: req.user.id,
        },
      }),
    ])
      .spread((a, foundAdmin) => {
        admin = foundAdmin;
        return admin.getChannels();
      })
      .then((adminChannels) => {
        if (!adminChannels) { throw new Error('Admin does not have any channels.'); }

        if (!_.filter(adminChannels, adminChannel => adminChannel.id === channel.id).length) {
          throw new Error('Admin does not have access to specified channels.');
        } else {
          return Survey.create({
            name,
            description,
          });
        }
      })
      .then((createdSurvey) => {
        survey = createdSurvey;
        return Promise.map(userIds, (userId) => {
          let user;
          return User.findById(userId)
            .then((foundUser) => {
              if (!foundUser) { throw new Error('User not found.'); }
              user = foundUser;
              return user.getChannels();
            })
            .then((userChannels) => {
              if (!userChannels) { throw new Error('User has no channels.'); }

              if (!_.filter(userChannels, userChannel => userChannel.id === channel.id).length) {
                throw new Error('User is not part of the specified channels.');
              } else {
                return Promise.all([            // validations all passed
                  survey.addUser(user),         // set associations
                  survey.setChannel(channel),
                  survey.setOwner(admin),
                  admin.addSurvey(survey),
                ]);
              }
            });
        });
      })
      .then(() => {
        res.status(201).send();
      });
  })
    .catch(next);
});

// GET - admin gets responses to a survey for a given channel
router.get('/survey/:surveyId', (req, res, next) => {
  const { surveyId } = req.params;

  if (!req.user) { res.status(403).send(); }

  let admin;
  let survey;
  let adminChannels;

  return Promise.all([
    Admin.findOne({
      where: {
        user_info_id: req.user.id,
      },
    })
      .then((foundAdmin) => {
        admin = foundAdmin;
        return admin.getChannels();
      })
      .then((foundAdminChannels) => {
        if (!foundAdminChannels) { throw new Error('Admin does not have any channels.'); }
        adminChannels = foundAdminChannels;
      }),
    Survey.findOne({
      where: {
        id: surveyId,
      },
      include: [{
        model: Question,
        include: [{
          model: Response,
          include: [{
            model: User,
            include: [{
              model: UserInfo,
              attributes: ['name', 'email'],
            }],
          }],
        }],
      }],
    })
      .then((foundSurvey) => {
        if (!foundSurvey) { throw new Error('Survey not found.'); }
        survey = foundSurvey;
        return survey.getChannel();
      }),
  ])
    .spread((a, surveyChannel) => {
      if (!surveyChannel) { throw new Error('Survey not linked to a channel.'); }
      if (!_.filter(adminChannels, adminChannel => adminChannel.id === surveyChannel.id).length) {
        throw new Error('Admin does not have access to specified survey.');
      }

      res.json(survey);
    })
    .catch(next);
});

module.exports = router;
