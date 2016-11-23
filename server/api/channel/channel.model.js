'use strict';

const Sequelize = require('sequelize');

const db = require('../../_db');

const Channel = db.define('channel', {
  name: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
}, {

  getterMethods: {
    numUsers: () => { // How many users does this channel have?
      return this.countUsers();
    },

    organization: () => { // To what organization does this channel belong?
      return this.getOrganization();
    },
  },


});

module.exports = Channel;
