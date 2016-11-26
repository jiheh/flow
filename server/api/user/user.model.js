'use strict';

const Sequelize = require('sequelize');
const bcrypt = require('bcrypt-as-promised');

const db = require('../../_db');

const User = db.define('users', {
  hash: {
    type: Sequelize.STRING,
  },
}, {
  hooks: {
    beforeCreate(user) {
      return bcrypt.hash(JSON.stringify(user), 10)
        .then(hash => {
          user.hash = hash;
        });
    },
  },
  instanceMethods: {
    // get this user's response from a specific survey
    getResponsesFromSurvey: (survey) => {
      return this.getResponses({
        include: [
          {
            model: Survey,
            where: {id: survey.id},
          },
        ],
      })
    },
    // has user been sent this specific survey?
    userHasBeenSentSurvey: (survey) => {
      return this.hasAssociation(survey);
    },
  }
});

module.exports = User;


