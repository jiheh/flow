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

      let { surveys } = user ;

      surveys.forEach((survey) => {
        let newQuestions = [];
        const { questions } = survey;

        if (survey.frequency.length) {
          let now = new Date();

          for (let i = 0; i < survey.frequency.length - 1; i++) {
            if (now > survey.frequency[i] && now < survey.frequency[i + 1]) {
              questions.forEach(question => {
                const { responses } = question;
                let userResponses = responses.filter(response => response.user_id === user.id);

                if (userResponses.filter(response => (
                  response.created_at > survey.frequency[i] && response.created_at < survey.frequency[i + 1]
                  )).length === 0) {
                  newQuestions.push(question);
                }
              });
            }
          }
        }

        else if (survey.frequency.length === 0) {
          questions.forEach((question) => {
            const { responses } = question;
            if (responses.filter(response => response.user_id === user.id).length === 0) {
              newQuestions.push(question);
            }
          });
        }

        survey.questions = newQuestions;
      });

      let s = surveys.filter(survey => survey.questions.length > 0);
      let result = s.map(s => Object.assign({}, {questions: s.questions}, {id: s.id}, {channel_id: s.channel_id}));
      res.send(result);
    })
    .catch(next);
});

// POST - admin creates survey
// survey status defaults to "inactive"
router.post('/', (req, res, next) => {
  const {
    channelId, // number
    name, // string - survey name
    description, // string - survey description
    frequency, // array of dates
    questions, // array of objects
    sample, // integer
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
            frequency
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

        if (sample) {
          let indices = [];
          let sampleSize = sample/100 * channelUsers.length;

          while (indices.length < sampleSize) {
            let randIndex = Math.floor(Math.random() * channelUsers.length);

            if (!indices.includes(randIndex)) indices.push(randIndex);
          }

          let sampleUsers = [];

          indices.forEach(i => sampleUsers.push(channelUsers[i]));
          channelUsers = sampleUsers;
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
        res.status(201).send(survey);
      });
    })
  .catch(next);
});

// GET - admin gets surveys for a given channel
// router.get('/channel/:channelId', (req, res, next) => {
//   const { channelId } = req.params;

//   if (!req.user) res.status(403).send();

//   let currentChannel, admin, allChannelSurveys, surveys;

//   Admin.findOne({
//     where: {
//       user_info_id: req.user.id,
//     },
//   })
//   .then((foundAdmin) => {
//     admin = foundAdmin;
//     return admin.getChannels({
//       where: {
//         id: channelId
//       }
//     });
//   })
//   .then((foundAdminChannels) => {
//     currentChannel = foundAdminChannels.find(channel => channel.id === +channelId);

//     if (!currentChannel) throw new Error('Admin does not have access to this channel.');

//     return currentChannel.getSurveys();
//   })
//   .then(channelSurveys => {
//     allChannelSurveys = channelSurveys;

//     return admin.getSurveys();
//   })
//   .then(adminSurveys => {
//     allChannelSurveys = allChannelSurveys.map(el => el.id)
//     console.log('ALLCHANNELSURVEYS', allChannelSurveys)
//     surveys = adminSurveys.filter(survey => {
//       allChannelSurveys.includes(survey.id);
//     });

//     console.log(surveys)
//     if (!surveys.length) throw new Error('Admin does not have access to surveys in this channel.');

//     res.send(surveys);
//   })
//   .catch(next);
// });

// GET - admin gets responses to a survey for a given channel
router.get('/survey/:surveyId', (req, res, next) => {
  const { surveyId } = req.params;

  if (!req.user) return res.status(403).send();

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
        if (!foundAdminChannels) throw new Error('Admin does not have any channels.');
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
              as: 'UserInfo',
              attributes: ['name', 'email'],
            }],
          }],
        }],
      }],
    })
      .then((foundSurvey) => {
        if (!foundSurvey) throw new Error('Survey not found.');
        survey = foundSurvey;
        return survey.getChannel();
      }),
  ])
    .spread((a, surveyChannel) => {
      if (!surveyChannel) throw new Error('Survey not linked to a channel.');
      if (!_.filter(adminChannels, adminChannel => adminChannel.id === surveyChannel.id).length) {
        throw new Error('Admin does not have access to specified survey.');
      }

      return survey;
    })
    .then(surveyToCount => {
      // count number of users
      return surveyToCount.countUsers();
    })
    .then(userCount => {
      console.log('((((((((((((((((((((((()))))))))))))))))))')
      console.log(userCount)
      survey.numUsers = userCount;
      res.json(survey);
    })
    .catch(next);
});

router.delete('/survey/:surveyId', (req, res, next) => {
  const { surveyId } = req.params;

  let admin;
  let survey;

  if (!req.user) return res.status(403).send();

  return Promise.all([
    Admin.findByUserInfoId(req.user.id)
      .then((foundAdmin) => {
        admin = foundAdmin;
        return admin.getChannels();
      })
      .then((foundAdminChannels) => {
        if (!foundAdminChannels) throw new Error('Admin does not have any channels.');
        adminChannels = foundAdminChannels;
      }),
    Survey.findOne({
      where: {
        id: surveyId,
      }
    })
      .then((foundSurvey) => {
        if (!foundSurvey) throw new Error('Survey not found.');
        survey = foundSurvey;
        return survey.getChannel();
      }),
  ])
    .spread((a, surveyChannel) => {
      if (!surveyChannel) throw new Error('Survey not linked to a channel.');
      if (!_.filter(adminChannels, adminChannel => adminChannel.id === surveyChannel.id).length) {
        throw new Error('Admin does not have access to specified survey.');
      }

      return Survey.delete({
        where: {
          id: survey.id
        }
      })
    })
    .then(deletedSurvey => {
      res.sendStatus(201);
    })
    .catch(next);
})

module.exports = router;
