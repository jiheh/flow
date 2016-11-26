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

  // getterMethods: {
  //   numUsers: () => { // How many users does this channels have?
      // return this.countUsers();
    // },

    // organization: () => { // To what organization does this channels belong?
      // return this.getOrganization();
    // },
  // },
  // location: {
  //   type: Sequelize.ARRAY(Sequelize.INTEGER),
  // },
});

module.exports = Channel;
