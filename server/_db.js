'use strict';

const Sequelize = require('sequelize');
const cls = require('continuation-local-storage');
const namespace = cls.createNamespace('clsNamespace');

Sequelize.cls = namespace;

const databaseURI = 'postgres://localhost:5432/flow';

const db = new Sequelize(databaseURI, {
  define: {
    timestamps: true,
    underscored: true,
  },
  logging: false,
});

module.exports = db;
