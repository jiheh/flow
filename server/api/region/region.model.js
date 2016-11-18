'use strict';

let Sequelize = require('sequelize');

let db = require('../../_db');

let Region = db.define('region', {
  name:{
    type:Sequelize.STRING
  }
});

module.exports = Region;


