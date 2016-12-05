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
  const surveysToCreate = surveyDataCreator(4, -1, -1);
  let admin;
  let channels;

  return Admin.findOne({
    where: {
      id: adminID,
    },
  })
    .then((foundAdmin) => {
      admin = foundAdmin;
      return admin.getChannels();
    })
    .then((foundChannels) => {
      console.log(foundChannels)
      return Promise.map((foundChannels), channel => {
        return Promise.map(surveysToCreate, surveyToCreate => {
          console.log("Creating survey");
          let questionsToCreate = surveyToCreate.questions;
          let survey;
          return Survey.create({
            name: surveyToCreate.name,
            description: surveyToCreate.description,
            active: true,
          })
          .then(createdSurvey => {
            survey = createdSurvey;
            return Promise.map(questionsToCreate, question => {
              return survey.createQuestion(question);
            });
          })
          .then(() => Promise.all([
            survey.setOwner(admin),
            admin.addSurvey(survey),
            survey.setChannel(channel),
          ]))
          .then(() => channel.getUsers())
          .then((users) => survey.setUsers(users));
        });
      });
    })
    .then(() => console.log('seeded surveys'));
}

module.exports = createSurveys;
