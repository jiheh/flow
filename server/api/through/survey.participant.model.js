'use strict';

const db = require('../../_db');
const Sequelize = require('sequelize');

const SurveyParticipants = db.define('Survey-Participant', {
  survey_id: {
    type: Sequelize.STRING,
  },
  participant_id: {
    type: Sequelize.STRING,
  },
});

module.exports = SurveyParticipants;
