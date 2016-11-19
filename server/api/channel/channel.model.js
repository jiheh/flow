'use strict';

let Sequelize = require('sequelize');

let db = require('../../_db');

let Channel = db.define('channel', {
 name:{
   type:Sequelize.STRING
 },
 location:{
   type:Sequelize.ARRAY(Sequelize.INTEGER)
 }
});

module.exports = Channel;


