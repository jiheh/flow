'use strict';

const Sequelize = require('sequelize');
const db = require('../../_db');

const Organization = db.define('organization', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique:true,
    validate: {
      notEmpty: true,
    },
  },
  type:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  numberOfStudents: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Organization;
