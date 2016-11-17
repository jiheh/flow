'use strict';

let Sequelize = require('sequelize');

let db = require('../../_db');

let User = db.define('user', {
  name:{
    type:Sequelize.STRING,
    allowNull:false
  },
  email:{
    type:Sequelize.STRING,
    isEmail:true,
    allowNull:false
  }
});

module.exports = User;


