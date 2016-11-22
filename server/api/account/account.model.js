'use strict';

const Sequelize = require('sequelize');

const db = require('../../_db');

const Account = db.define('account', {
  type: {
    type: Sequelize.STRING, // eslint-disable-line new-cap
    allowNull: false,
  },
  maxStudents: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  cost: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
});

module.exports = Account;
