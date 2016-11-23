'use strict';

const db = require('../../_db');
const Sequelize = require('sequelize');

const Announcement = db.define('announcements', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  contents: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Announcement;
