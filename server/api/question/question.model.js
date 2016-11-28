'use strict';

const Sequelize = require('sequelize');
const db = require('../../_db');

const Question = db.define('question', {
  text: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  type:{
    type: Sequelize.ENUM('multiple_choice', 'emoji', 'slider', 'text', 'binary'),
    allowNull: false,
  },
  MCFields: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  SliderFields: {
    type: Sequelize.ARRAY(Sequelize.INTEGER)
  }
});

module.exports = Question;
