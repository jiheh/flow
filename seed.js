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



const seedDatabase = num =>{
    db.sync({force: true})

    .then(() => seedAdmins(num))
    .then(() => seedUsers(num))
    .then(() => seedChannels(num))
    .then(() => seedOrganizations(num))
    .then(() => seedAccounts(num))
    .then(() => seedBillings(num))
    .then(function () {
      console.log('Seeding successful');
    }, function (err) {
      console.error('Error while seeding');
      console.error(err.stack);
    })
    .then(function () {
      process.exit();
    });

}


seedDatabase(10)

