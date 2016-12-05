/* eslint-disable arrow-body-style */

'use strict';

const UserInfo = require('../userInfo/userInfo.model');
const Admin = require('../admin/admin.model');

const createAdmins = (n) => {
  const arrToReturn = [];
  const adminsObject = {
    0: {
      name: 'Global Admin',
      email: 'globaladmin@flow.com',
      password: '123456'
    },
    1: {
      name: 'Clement Mihailescu',
      email: 'clement@flow.com',
      password: '123456'
    },
    2: {
      name: 'Jiheh Ritterling',
      email: 'jiheh@flow.com',
      password: '123456'
    },
    3: {
      name: 'Hussein Farah',
      email: 'hussein@flow.com',
      password: '123456'
    },
    4: {
      name: 'Franklyn Zhu',
      email: 'franklyn@flow.com',
      password: '123456'
    },
    5: {
      name: 'Anthony Ardito',
      email: 'anthony@flow.com',
      password: '123456'
    },
  };
  console.log(`Creating Global Admin, Clement, Jiheh, Hussein, Franklyn, and Anthony`);
  for (let i = 0; i < n; i++) {
    let currentUserInfo;
    const userPromise = UserInfo.create({
      name: adminsObject[i].name,
      email: adminsObject[i].email,
      password: adminsObject[i].password
    })
    .then((userInfo) => {
      currentUserInfo = userInfo;
      return Admin.create({});
    })
    .then((admin) => {
      return admin.update({ user_info_id: currentUserInfo.id });
    });
    arrToReturn.push(userPromise);
  }
  return Promise.all(arrToReturn);
};

module.exports = createAdmins;
