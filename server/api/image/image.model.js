'use strict';

let Sequelize = require('sequelize');

let db = require('../../_db');

let Image = db.define('image', {
  url:{
    type:Sequelize.STRING,
    allowNull:false
  },
  // artist:{
  //   type:Sequelize.STRING 
  // },
});

module.exports = Image;


