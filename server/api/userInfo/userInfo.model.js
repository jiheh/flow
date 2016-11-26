'use strict';

const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

const db = require('../../_db');

function setEmailAndPassword(user) {
  user.email = user.email && user.email.toLowerCase();
  if (!user.password) return Promise.resolve(user);

  return new Promise((resolve, reject) =>
    bcrypt.hash(user.get('password'), 10, (err, hash) => {
      if (err) reject(err);
      user.set('password_digest', hash);
      resolve(user);
    })
  );
}


const UserInfo = db.define('userInfo', {
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },
  password_digest: Sequelize.STRING,
  password: {
    type: Sequelize.VIRTUAL,
    validate: {
      isLongEnough: (val) => {
        if (val.length < 6) {
          throw new Error('Please choose a longer password.');
        }
      },
    },
  },
}, {
  indexes: [{
    fields: ['email'],
    unique: true,
  }],
  hooks: {
    beforeCreate: setEmailAndPassword, // eslint-disable-line no-use-before-define
    beforeUpdate: setEmailAndPassword, // eslint-disable-line no-use-before-define
  },
  instanceMethods: {
    authenticate(plaintext) {
      return new Promise((resolve, reject) =>
        bcrypt.compare(plaintext, this.password_digest,
          (err, result) =>
          err ? reject(err) : resolve(result))
      );
    },
  },

});

module.exports = UserInfo;
