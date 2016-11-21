'use strict';

const Sequelize = require('sequelize');

const db = require('../../_db');

const Region = db.define('region', {
  name: {
    type: Sequelize.STRING,
  },
});

module.exports = Region;
