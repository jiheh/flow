'use strict';

let Sequelize = require('sequelize');

let db = require('../../_db');

let Account = db.define('account', {
  type:{
    type:Sequelize.ENUM('basic,medium,pro'),
    allowNull:false
  },
  maxStudents:{
    type:Sequelize.INTEGER,
    allowNull:false
  },
  cost:{
    type:Sequelize.DOUBLE,
    allowNull:false
  }
});

module.exports = Account;


