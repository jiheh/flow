'use strict';

var app = require('./app');
var db = require('./db');

var port = 8080;
var server = app.listen(port, function (err) {
  if (err) throw err;
  console.log(`Server is listening to port ${port}!`);
  db.sync()
  .then(function () {
    console.log('Database is connected!');
  });
});

module.exports = server;
