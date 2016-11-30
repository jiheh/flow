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

  // 1. Find admin based on parameter adminID
  // include the relevant associations: channel_id,
  return Admin.findOne({
    where: {
      id: adminID,
    },
    include: [
      {
        model: Channel,
        attributes: ['id'],
      },
    ]
  })
  .then((foundAdmin) => {
    // go through each channel of the foundAdmin and add random surveys to each channel
    const foundAdminChannels = foundAdmin.channels;
    console.log(`\tCreating surveys for Admin ${adminID}`);

    // each channel gets three random surveys
    return Promise.map(foundAdminChannels, (channel => {
      console.log(`\t\tChannel ${channel.id}`);
      // pick three random surveys
      let surveys = surveyDataCreator(4, foundAdmin.id, channel.id);

      // create surveys in the array
      return Promise.all(surveys.map(s => {
        const survey = s;
        const surveyQuestions = survey.questions;

        return Survey.create(survey)
          // create survey based on data
          .then(newlyCreatedSurvey => {
            console.log(`\t\tQuestions have been created for Survey ${newlyCreatedSurvey.id}`)
            // now create questions
            return Promise.map(surveyQuestions, (q => Question.create(q)))
                    .then(newlyCreatedQuestionsArray => {
                      return Promise.map(newlyCreatedQuestionsArray, (newQuestion => {
                        // and associate those questions with the current survey
                        return newlyCreatedSurvey.addQuestion(newQuestion);
                      }))
                    })
          })
      }))
        .then(allSurveysForCurrentChannel => {
          // add survey to every user in the channel
          const flattenedSurveys = _.flattenDeep(allSurveysForCurrentChannel);

          return channel.getUsers()
            .then(allUsersFromChannel => {
             return Promise.map(allUsersFromChannel, (user) => {
               return Promise.map(flattenedSurveys, (survey) => {
                 return user.addSurvey(survey);
               })
             });

            })
        })
        .then(r => {
          console.log(`\t\tSurveys have been associated with users in Channel ${channel.id}`)
        })
        .catch(err => {
          console.log(err);
        })

    }))

  })
};

module.exports = createSurveys;
