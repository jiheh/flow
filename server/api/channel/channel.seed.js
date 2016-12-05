/* eslint-disable arrow-body-style */

const Admin = require('../admin/admin.model');
const Channel = require('./channel.model');
// const User = require('../user/user.model');

const Chance = require('chance');
const chance = new Chance();

// creates N channels for a specific admin
const createChannels = (admins, n) => {

  // console.log(`\tCreating ${n} Channels for Admin ${adminID}`);

  const channelsObject = {
    0: {
      name: 'Global Channel',
      description: 'Flow Channel For Every User'
    },
    1: {
      name: 'Fullstack Academy 1607 Cohort',
      description: 'Fullstack Academy of Code Cohort'
    },
    2: {
      name: 'Fullstack Academy 1608 Cohort',
      description: 'Fullstack Academy of Code Cohort'
    },
    3: {
      name: 'Fullstack Academy 1609 Cohort',
      description: 'Fullstack Academy of Code Cohort'
    },
    4: {
      name: 'Fullstack Academy 1610 Cohort',
      description: 'Fullstack Academy of Code Cohort'
    },
    5: {
      name: 'Fullstack Academy 1611 Cohort',
      description: 'Fullstack Academy of Code Cohort'
    },
  }
  console.log(`Creating Global Channel and Fullstack Academy Cohorts 1607-1611`)
  const arrToReturn = [];
  for (let i = 0; i < n; i++) {
    let currentChannel;
    const channelPromise = Channel.create({
      name: channelsObject[i].name,
      description: channelsObject[i].description
    })
    .then((channel) => {
      currentChannel = channel;
      if (i === 0) {
        Admin.findById(admins[0].id)
        .then((admin) => {
          currentChannel.addAdmin(admin);
        });
      } else {
        for (let j = 1; j < 6; j++) {
          Admin.findById(admins[j].id)
          .then((admin) => {
            currentChannel.addAdmin(admin);
          });
        }
      }
      return currentChannel;
    })
    // .then((admin) => {
    //   return currentChannel.addAdmin(admin);
    // })
    // .then(() => {
    //   return currentChannel;
    // })
    arrToReturn.push(channelPromise);
  }
  return Promise.all(arrToReturn);
};

module.exports = createChannels;
