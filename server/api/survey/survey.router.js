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
router.post('/', (req, res, next) => {
  const {
    channelId, // number
    userIds, // array of numbers
    name, // string - survey name
    description, // string - survey description
    questions, // array of objects
  } = req.body;

  if (!req.user) { throw new Error(); }

  db.transaction((t) => {
    let channel;
    let survey;
    let admin;
    return Channel.findById(channelId)
      .then((foundChannel) => {
        if (!foundChannel) { throw new Error('ChannelItem not found.'); }

        channel = foundChannel;
        return Admin.findOne({
          where: {
            user_info_id: req.user.id,
          },
        });
      })
      .then((foundAdmin) => {
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
                return survey.addUser(user);
              }
            });
        });
      })
      .then(() => {
        return survey.setChannel(channel);
      })
      .then(() => {
        return survey.setOwner(admin);
      })
      .then(() => {
        return admin.addSurvey(survey);
      })
      .then(() => {
        res.status(201).send();
      });
  })
    .catch(next);
});

module.exports = router;
