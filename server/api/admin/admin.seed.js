/* eslint-disable arrow-body-style */

'use strict';

const UserInfo = require('../userInfo/userInfo.model');
const Admin = require('../admin/admin.model');

const createAdmins = (n) => {
  const arrToReturn = [];

  console.log(`\tCreating Global Admin`);

  let globalChannelAdmin;
  const globalChannelAdminPromise = UserInfo.create({
    name: "Clement Mihailescu",
    email: "clementadmin@clementadmin.com",
    password: "clementadmin123456",
  })
  .then((userInfo) => {
    globalChannelAdmin = userInfo;
    return Admin.create({});
  })
  .then((admin) => {
    return admin.update({ user_info_id: globalChannelAdmin.id });
  });
  arrToReturn.push(globalChannelAdminPromise);

  console.log(`\tCreating ${n} Admins`);

  for (let i = 0; i < n; i++) {
    let userGlobal;
    const userPromise = UserInfo.create({
      name: `admin${i+1}`,
      email: `admin${i+1}@admin.com`,
      password: `123456`,
    })
    .then((userInfo) => {
      userGlobal = userInfo;
      return Admin.create({});
    })
    .then((admin) => {
      return admin.update({ user_info_id: userGlobal.id });
    });

    arrToReturn.push(userPromise);
  }
  return Promise.all(arrToReturn);
};

module.exports = createAdmins;
