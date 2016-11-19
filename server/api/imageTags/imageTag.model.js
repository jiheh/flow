'use strict';

let Sequelize = require('sequelize');

let db = require('../../_db');

let ImageTag = db.define('imageTag', {
  name:{
    type:Sequelize.STRING
  },
  userRating:{
    type:Sequelize.INTEGER
  }
});

module.exports = ImageTag;


