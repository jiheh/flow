'use strict';

let chance = require('chance')(123);
let Promise = require('bluebird');

let db = require('./server/db');
let User = require('./server/api/users/user.model');
const seedAdmins = require('./server/api/admin/admin.seed')
const seedUsers = require('./server/api/users/user.seed')
const seedChannels = require('./server/api/channel/channel.seed')
const seedOrganizations = require('./server/api/organization/organization.seed')
const seedAccounts = require('./server/api/account/account.seed')
const seedBillings = require('./server/api/billing/billing.seed') 


db.sync({force: true})
.then(() => seedAdmins(10))
.then(() => seedUsers(10))
.then(() => seedChannels(10))
.then(() => seedOrganizations(10))
.then(() => seedAccounts(10))
.then(() => seedBillings(10))
.then(function () {
  console.log('Seeding successful');
}, function (err) {
  console.error('Error while seeding');
  console.error(err.stack);
})
.then(function () {
  process.exit();
});
