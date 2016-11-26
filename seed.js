'use strict';

const db = require('./server/db');
const seedAdmins = require('./server/api/admin/admin.seed');
const seedUsers = require('./server/api/user/user.seed');
const seedChannels = require('./server/api/channel/channel.seed');
const seedOrganizations = require('./server/api/organization/organization.seed');
const seedAccounts = require('./server/api/account/account.seed');
const seedBillings = require('./server/api/billing/billing.seed');
const seedAnnouncements = require('./server/api/announcement/announcement.seed');
const test = require('./server/api/admin/admin.methods');

const seedDatabase = num => {
    db.sync({ force: true })
    .then(() => seedAdmins(num))
    .then(() => seedUsers(num))
    .then(() => seedChannels(num))
    .then(() => seedOrganizations(num))
    .then(() => seedAccounts(num))
    .then(() => seedBillings(num))
    .then(() => seedAnnouncements(50))
    .then(() => {
      console.log('Seeding successful');
    }, (err) => {
      console.error('Error while seeding');
      console.error(err.stack);
    })
    .then(() => {
      process.exit();
    });
};

seedDatabase(10);

