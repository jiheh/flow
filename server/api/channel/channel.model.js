'use strict';

const Sequelize = require('sequelize');

const db = require('../../_db');

const Channel = db.define('channel', {
  name: {
    type: Sequelize.STRING,
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
  },
});

module.exports = Channel;
