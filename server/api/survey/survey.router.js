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
        include: [{
          model: Response,
        }],
      }],
    }],
    order: 'created_at ASC',
  })
    .then((user) => {
      if (!user) throw new Error('User not found.');

      const { surveys } = user;
      const filteredSurveys = surveys.map((survey) => {
        let questions = survey.questions.filter((question) => {
          return question.responses.length === 0;
        });
        survey.questions = questions;
        return survey;
      });
      res.json(filteredSurveys.filter(survey => survey.questions.length > 0));
    })
    .catch(next);
});


// POST - admin creates survey
router.post('/', (req, res, next) => {
  const {
    channelId, // number
    userIds, // array of numbers
    name, // string - survey name
    description, // string - survey description
    questions, // array of objects
  } = req.body;

  if (!req.user) res.status(403).send();

  db.transaction((t) => {
    let channel;
    let survey;
    let admin;
    return Promise.all([
      Channel.findById(channelId)
        .then((foundChannel) => {

          if (!foundChannel) throw new Error('ChannelItem not found.');

          channel = foundChannel;
        }),
      Admin.findByUserInfoId(req.user.id),
    ])
      .spread((a, foundAdmin) => {
        admin = foundAdmin;
        return admin.getChannels();
      })
      .then((adminChannels) => {
        if (!adminChannels || !adminChannels.length) throw new Error('Admin does not have any channels.');

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

        return Promise.map(questions, question => {
          return Question.create(question);
        });
      })
      .then(surveyQuestions => {
        return Promise.map(surveyQuestions, question => {
          return question.setSurvey(survey);
        });
      })
      .then(() => {
        return channel.getUsers();
      })
      .then(channelUsers => {
        if (!channelUsers || !channelUsers.length) throw new Error('No users in this channel');

        if (userIds) {
          let channelIds = channelUsers.map(user => user.id);

          userIds.forEach(userId => {
            if (!channelIds.includes(userId)) throw new Error('User is not part of the specified channel');
          });

          channelUsers = channelUsers.filter(channelUser => userIds.includes(channelUser.id));
        }

        return Promise.map(channelUsers, channelUser => {
          return survey.addUser(channelUser);
        });
      })
      .then(() => {
        return Promise.all([
          survey.setChannel(channel),
          survey.setOwner(admin),
          admin.addSurvey(survey),
        ]);
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
    Admin.findByUserInfoId(req.user.id)
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
