/* eslint-disable arrow-body-style */

const Admin = require('../admin/admin.model');
const Channel = require('./channel.model');
const User = require('../user/user.model');

const createChannels = (n) => {
  const arrToReturn = [];
  for (let i = 1; i <= n; i++) {
    let channelGlobal;
    const channelPromise = Channel.create({
      name: `channel${i}`,
      description:'fake description'
      // location: [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)],
    })
    .then((channel) => {
      channelGlobal = channel;
      return Admin.findById(i);
    })
    .then((admin) => {
      return channelGlobal.addAdmin(admin);
    })
    .then(() => {
      return User.findById(i);
    })
    .then((user) => {
      if(user){
        return channelGlobal.addUser(user);
      }
    });
    arrToReturn.push(channelPromise);
  }
  return Promise.all(arrToReturn);
};

module.exports = createChannels;
