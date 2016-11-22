'use strict';

const Sequelize = require('sequelize');
const bcrypt = require('bcrypt-as-promised');

const db = require('../../_db');

const User = db.define('users', {
  hash: {
    type: Sequelize.STRING,
  },
}, {
  hooks: {
    beforeCreate(user) {
      return bcrypt.hash(JSON.stringify(user), 10)
        .then(hash => {
          user.hash = hash;
        })
        .catch(console.error); // TODO: error handling
    },
  },
});


module.exports = User;


