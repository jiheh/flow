'use strict';

const Sequelize = require('sequelize');
const db = require('../../_db');

const Response = db.define('response', {
  value: {
    type: Sequelize.TEXT,
    allowNull: false,
    dafaultValue: 'Emoticons',
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Response;
