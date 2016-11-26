'use strict';
const router = require('express').Router();
const Promise = require('bluebird');

const db = require('../../_db');

const HttpError = require('../../utils/HttpError');
const Survey = require('./survey.model');
const Question = require('../question/question.model');

router.post('/', (req, res, next) => {
  let newSurvey;
  Survey.create({
    name: req.body.name,
    description: req.body.description,
    active: req.body.active
  })
  .then(createdSurvey => {
    newSurvey = createdSurvey;
    return Promise.map(req.body.questions, question => {
      return Question.create(question);
    });
  })
  .then(surveyQuestions => {
    return Promise.map(surveyQuestions, question => {
      return question.setSurvey(newSurvey);
    });
  })
  .then(() => res.send("Survey created successfully!"))
  .catch(next);
});


router.put('/:id', (req, res, next) => {

});

module.exports = router;
