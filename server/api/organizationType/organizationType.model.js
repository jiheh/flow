'use strict';

let Sequelize = require('sequelize');

let db = require('../../_db');

let OrganizationType = db.define('organizationType', {
  type:{
    type:Sequelize.STRING
  }
});

module.exports = OrganizationType;


