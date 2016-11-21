'use strict';

const app = require('./app');
const db = require('./db');

const port = 8080;
const server = app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server is listening to port ${port}!`);
  db.sync({ force: true })
    .then(() => {
      console.log('Database is connected!');
    });
});

module.exports = server;
