'use strict';

const router = require('express').Router();

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
    let questionArray = [];

    req.body.questions.forEach(question => {
      let questionPromise = Question.create(question);
      questionArray.push(questionPromise);
    });

    return Promise.all(questionArray);
  })
  .then(surveyQuestions => {
    let setArray = [];
    surveyQuestions.forEach(question => {
      let setPromise = question.setSurvey(newSurvey);
      setArray.push(setPromise);
    });

    return Promise.all(setArray);
  })
  .then(() => res.send("Survey created successfully!"))
  .catch(next);
});


router.put('/:id', (req, res, next) => {

});

module.exports = router;
