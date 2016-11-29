/* eslint-disable arrow-body-style */

'use strict';

const UserInfo = require('../userInfo/userInfo.model');
const Admin = require('../admin/admin.model');

const createAdmins = (n) => {
  console.log(`\tCreating ${n} Admins`);

  const arrToReturn = [];
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
    }).then((admin) => {
      return admin.update({ user_info_id: userGlobal.id });
    });

    arrToReturn.push(userPromise);
  }
  return Promise.all(arrToReturn);
};

module.exports = createAdmins;
