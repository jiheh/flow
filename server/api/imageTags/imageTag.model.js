'use strict';

const Sequelize = require('sequelize');

const db = require('../../_db');

const ImageTag = db.define('imageTag', {
  name: {
    type: Sequelize.STRING,
  },
  userRating: {
    type: Sequelize.INTEGER,
  },
});

module.exports = ImageTag;
