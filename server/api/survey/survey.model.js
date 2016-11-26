'use strict';

const Sequelize = require('sequelize');
const db = require('../../_db');

const Survey = db.define('survey', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  active: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
}, {
  instanceMethods: {
    // How many questions does this survey have?
    numberOfQuestions: () => {
      this.getQuestions()
        .then(questions => {
          return questions.length;
        })
    }
  }
});

module.exports = Survey;
