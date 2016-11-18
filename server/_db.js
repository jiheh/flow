'use strict';

let Sequelize = require('sequelize');

let databaseURI = 'postgres://localhost:5432/flow';

let db = new Sequelize(databaseURI, {
    define: {
        timestamps: true,
        underscored: true
    },
    logging: false
});

module.exports = db;
