/* eslint-disable arrow-body-style */

'use strict';

const UserInfo = require('../userInfo/userInfo.model');
const User = require('../user/user.model');

const createUsers = (n) => {
  const arrToReturn = [];
  for (let i = 1; i <= n; i++) {
    let userGlobal;
    const userPromise = UserInfo.create({
      name: `user${i}`,
      email: `user${i}@user.com`,
      password: '123456',
    })
      .then((userInfo) => {
        userGlobal = userInfo;
        return User.create({});
      })
      .then((user) => {
        return user.update({
          user_info_id: userGlobal.id,
        });
      });

    arrToReturn.push(userPromise);
  }
  return Promise.all(arrToReturn);
};

module.exports = createUsers;
