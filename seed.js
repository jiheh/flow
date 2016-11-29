'use strict';


const chalk = require('chalk');
const Promise = require('bluebird');
const _ = require('lodash');

const db = require('./server/db');
const seedAdmins = require('./server/api/admin/admin.seed');
const seedUsers = require('./server/api/user/user.seed');
const seedChannels = require('./server/api/channel/channel.seed');
const seedOrganization = require('./server/api/organization/organization.seed');
const seedAnnouncements = require('./server/api/announcement/announcement.seed');
const seedSurveys = require('./server/api/survey/survey.seed');
const seedResponses = require('./server/api/response/response.seed');
const test = require('./server/api/admin/admin.methods');
// const seedAccounts = require('./server/api/account/account.seed');
// const seedBillings = require('./server/api/billing/billing.seed');

const chance = new require('chance')();

// use supertest to make post requests, so we can use server logic
// var supertest = require('supertest-as-promised')(require('./server/app'));
// supertest.post...

const seedDatabase = num => {
    let adminGlobal;
    let channelGlobal;
    db.sync({ force: true })
    .then(() => {
      console.log(chalk.yellow('CREATING ADMINS'));
      return seedAdmins(1)
    })
    .spread((admin) => {
      console.log(chalk.yellow('CREATING CHANNELS FOR ADMIN'))
      adminGlobal = admin;
      return seedChannels(admin.id, 5)
    })
    .then((newChannels) => {
      channelGlobal = newChannels;
      console.log(chalk.yellow('CREATING USERS FOR EACH CHANNEL'));
      const channels = _.flattenDeep(newChannels);
      // return an array of promises to create N users for each channel
      return Promise.all(channels.map(channel => {
        return seedUsers(channel, chance.integer({min:10, max:50}))
      }))
    })
    .then(() => {
      console.log(chalk.yellow('CREATING ANNOUNCEMENTS FOR EACH CHANNEL'));
      return Promise.all(channelGlobal.map(channel => {
        seedAnnouncements(adminGlobal, channel, chance.integer({min:3, max: 20}))
      }))
    })
    .then(() => {
      console.log(chalk.yellow('CREATING ORGANIZATIONS'));
      return seedOrganization(adminGlobal, 1)
    })
    .then(() => seedSurveys(1)) // which admin gets the surveys?
    .then(() => {
      console.log(chalk.yellow('CREATING RESPONSES FOR USERS'));
      return seedResponses();
    })
    // .then(() => seedAccounts(num))
    // .then(() => seedBillings(num))

    .then(() => {
      console.log(chalk.green('Seeding successful'));
    }, (err) => {
      console.error(chalk.red('Error while seeding'));
      console.error(err.stack);
    })
    .then(() => {
      process.exit();
    });
};

seedDatabase(10);

