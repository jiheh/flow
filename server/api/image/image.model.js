'use strict';

const Sequelize = require('sequelize');

const db = require('../../_db');

const Image = db.define('image', {
  url: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // artist:{
  //   type:Sequelize.STRING,
  // },
});

module.exports = Image;
