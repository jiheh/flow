'use strict';

let app = require('./app');
let db = require('./db');

let port = 8080;
let server = app.listen(port, function (err) {
  if (err) throw err;
  console.log(`Server is listening to port ${port}!`);
  db.sync()
  .then(function () {
    console.log('Database is connected!');
  });
});

module.exports = server;
