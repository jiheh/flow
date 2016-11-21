'use strict';

const Sequelize = require('sequelize');

const db = require('../../_db');

const OrganizationType = db.define('organizationType', {
  type: {
    type: Sequelize.STRING
  }
});

module.exports = OrganizationType;
