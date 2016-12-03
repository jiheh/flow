/* eslint-disable arrow-body-style */

'use strict';

const Chance = require('chance');
const chance = new Chance();

const UserInfo = require('../userInfo/userInfo.model');
const User = require('../user/user.model');

const createUsers = (channelInstance, n) => {
  const arrToReturn = [];
  console.log(`\tCreating ${n} Users for Channel ${channelInstance.id}`);
  for (let i = 1; i <= n; i++) {
    let userGlobal;
    let name = chance.name()
    while(name.length > 11){
      name = chance.name()
    }
    const userPromise = UserInfo.create({
      name: name,
      email: chance.email(),
      password: '123456',
    })
      .then((userInfo) => {
        userGlobal = userInfo;
        return User.create({});
      })
      .then((user) => {
        return user.setUserInfo(userGlobal);
      })
      .then((updatedUser) => {
        return channelInstance.addUser(updatedUser, { through: 'User-ChannelItem' });
      })

    arrToReturn.push(userPromise);
  }
  return Promise.all(arrToReturn);
};

module.exports = createUsers;
