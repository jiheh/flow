// Survey Seeding
// Surveys will be hard coded so that they make sense
'use strict';

const Promise = require('bluebird');
const lorem = require('lorem-ipsum');
const _ = require('lodash');
const chalk = require('chalk');

const Survey = require('./survey.model');
const User = require('../user/user.model');
const Question = require('../question/question.model');
const Channel = require('../channel/channel.model');
const Admin = require('../admin/admin.model');

const surveyDataCreator = require('../survey.data');

const createSurveys = (adminID) => {
  console.log(chalk.yellow(`SEEDING SURVEYS`));
  const surveysToCreate = surveyDataCreator(4, -1, -1);

  return Admin.findOne({
    where: {
      id: adminID,
    },
  })
  .then((foundAdmin) => {
    console.log(`\tCreating surveys for Admin ${adminID}`);
    return Promise.map(surveysToCreate, surveyToCreate => {
      let questionsToCreate = surveyToCreate.questions;
      let survey;
      return Survey.create({
        name: surveyToCreate.name,
        description: surveyToCreate.description,
        active: true
      })
        .then(createdSurvey => {
          survey = createdSurvey;
          return Promise.map(questionsToCreate, question => {
            return survey.createQuestion(question);
          })
            .then(() => {
              return survey.setOwner(foundAdmin);
            })
            .then(() => {
              return foundAdmin.addSurvey(survey);
            })
            .then(() => {
              return foundAdmin.getChannels();
            })
            .then(channels => {
              return Promise.map(channels, channel => {
                return survey.setChannel(channel)
                  .then(() => {
                    return channel.getUsers();
                  })
                  .then(channelUsers => {
                    return survey.setUsers(channelUsers);
                  });
              });
            });
        });
    });
  })
    .then(() => console.log('seeded surveys'));
}

module.exports = createSurveys;
