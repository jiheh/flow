'use strict';

let chance = require('chance')(123);
let Promise = require('bluebird');

let db = require('./server/db');
let User = require('./server/api/users/user.model');

let numUsers = 100;

let emails = chance.unique(chance.email, numUsers);

function doTimes (n, fn) {
  let results = [];
  while (n--) {
    results.push(fn());
  }
  return results;
}

function randPhoto () {
  let g = chance.pick(['men', 'women']);
  let n = chance.natural({
    min: 0,
    max: 96
  });
  return 'http://api.randomuser.me/portraits/' + g + '/' + n + '.jpg'
}

function randUser () {
  return User.build({
    name: [chance.first(), chance.last()].join(' '),
    photo: randPhoto(),
    phone: chance.phone(),
    email: emails.pop(),
    password: chance.word(),
    isAdmin: chance.weighted([true, false], [5, 95])
  });
}

function generateUsers () {
  let users = doTimes(numUsers, randUser);
  users.push(User.build({
    name: 'Zeke Nierenberg',
    photo: 'http://learndotresources.s3.amazonaws.com/workshop/55e5c92fe859dc0300619bc8/zeke-astronaut.png',
    phone: '(510) 295-5523',
    email: 'zeke@zeke.zeke',
    password: '123',
    isAdmin: true
  }));
  users.push(User.build({
    name: 'Omri Bernstein',
    photo: 'http://learndotresources.s3.amazonaws.com/workshop/55e5c92fe859dc0300619bc8/sloth.jpg',
    phone: '(781) 854-8854',
    email: 'omri@zeke.zeke',
    password: '123'
  }));
  return users;
}

function createUsers () {
  return Promise.map(generateUsers(), function (user) {
    return user.save();
  });
}

function seed () {
  return createUsers()
}

db.sync({force: true})
.then(function () {
  // return seed();
  return 
})
.then(function () {
  console.log('Seeding successful');
}, function (err) {
  console.error('Error while seeding');
  console.error(err.stack);
})
.then(function () {
  process.exit();
});
