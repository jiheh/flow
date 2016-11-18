'use strict';

let Sequelize = require('sequelize');

let db = require('../../_db');

let Billing = db.define('billing', {
  cardType:{
    type:Sequelize.ENUM('visa,mastercard'),
    allowNull:false
  },
  cardNumber:{
    type:Sequelize.STRING,
    allowNull:false
  },
  expiryDate:{
    type:Sequelize.INTEGER,
    allowNull:false
  },
  securityNumber:{
    type:Sequelize.INTEGER,
    allowNull:false
  }
});

module.exports = Billing;


