/* eslint-disable arrow-body-style */

'use strict';

const _ = require('lodash');

// eslint-disable-next-line new-cap
const router = require('express').Router();

const db = require('../../_db');
const Promise = require('bluebird');

const Survey = require('../survey/survey.model');
const User = require('../user/user.model');
const Question = require('../question/question.model');
const Response = require('./response.model');

// POST - user responds to a survey question
router.post('/chrome', (req, res, next) => {
  const {
    hash,
    questionId,
    value,
  } = req.body;

  let user;
  let question;

  // eslint-disable-next-line no-unused-vars
  db.transaction((t) => {
    User.findOne({
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
    })
      .then((foundUser) => {
        if (!user) { throw new Error('User not found.'); }

        user = foundUser;
        const { surveys } = user;
        const foundSurvey = _.find(surveys, (surveyToCheck) => {
          const { questions } = surveyToCheck;
          const foundQuestion =
                _.find(questions, questionToCheck => questionToCheck.id === questionId);

          if (foundQuestion) {
            if (foundQuestion.response == null) {
              // found question and it hasn't been answered already
              question = foundQuestion;
              return true;
            } else { // eslint-disable-line no-else-return
              // question already answered by user
              throw new Error('Question already answered by user.');
            }
          } else { return false; }
        });

        if (!foundSurvey) {
          throw new Error('Question not found.');
        } else {
          // question found, add response
          return Response.create({ value });
        }
      })
      .then((createdResponse) => {
        return Promise.all([
          user.addResponse(createdResponse),
          question.addResponse(createdResponse),
        ]);
      })
      .then(() => res.status(201).send());
  })
    .catch(next);
});

module.exports = router;
