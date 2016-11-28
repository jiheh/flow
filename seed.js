'use strict';


const chalk = require('chalk');

const db = require('./server/db');
const seedAdmins = require('./server/api/admin/admin.seed');
const seedUsers = require('./server/api/user/user.seed');
const seedChannels = require('./server/api/channel/channel.seed');
const seedOrganizations = require('./server/api/organization/organization.seed');
const seedAccounts = require('./server/api/account/account.seed');
const seedBillings = require('./server/api/billing/billing.seed');
const seedAnnouncements = require('./server/api/announcement/announcement.seed');
const seedSurveys = require('./server/api/survey/survey.seed');
const test = require('./server/api/admin/admin.methods');

// use supertest to make post requests, so we can use server logic
// var supertest = require('supertest-as-promised')(require('./server/app'));
// supertest.post...

const seedDatabase = num => {
    db.sync({ force: true })
    .then(() => seedAdmins(num))
    .then(() => seedUsers(num))
    .then(() => seedChannels(num))
    .then(() => seedOrganizations(num))
    .then(() => seedAccounts(num))
    .then(() => seedBillings(num))
    .then(() => seedAnnouncements(50))
    .then(() => seedSurveys(1)) // which admin gets the surveys?
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

