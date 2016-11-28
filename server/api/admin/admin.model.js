'use strict';

const db = require('../../_db');
const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');

const Admin = db.define('admins', {
}, {
  classMethods: {
    findByUserInfoId: function(userInfoId) {
      return this.findOne({
        where: {
          user_info_id: userInfoId,
        },
      });
    },
  },
});

module.exports = Admin;


