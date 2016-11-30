/* eslint-disable arrow-body-style */

const Admin = require('../admin/admin.model');
const Channel = require('./channel.model');
// const User = require('../user/user.model');

const Chance = require('chance');
const chance = new Chance();

// creates N channels for a specific admin
const createChannels = (adminID, n) => {

  console.log(`\tCreating ${n} Channels for Admin ${adminID}`);

  const cohorts = ['Junior', 'Senior'];

  const arrToReturn = [];
  for (let i = 1; i <= n; i++) {
    let channelGlobal;
    const channelPromise = Channel.create({
      name: `Fullstack ${chance.pickone(cohorts)} Cohort ${chance.integer({min:1600, max:1612})}`,
      description:'Fullstack Academy of Code Cohort'
      // location: [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)],
    })
    .then((channel) => {
      channelGlobal = channel;
      return Admin.findById(adminID);
    })
    .then((admin) => {
      return channelGlobal.addAdmin(admin);
    })
    .then(() => {
      return channelGlobal;
    })
    // .then(() => { // this code is moved to the main seed file.
    //   return User.findById(i);
    // })
    // .then((user) => {
    //   if(user){
    //     return channelGlobal.addUser(user);
    //   }
    // });
    arrToReturn.push(channelPromise);
  }
  return Promise.all(arrToReturn);
};

module.exports = createChannels;
