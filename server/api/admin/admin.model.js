'use strict';

const db = require('../../_db');
const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');

let Admin = db.define('admins', {
});

module.exports = Admin;


