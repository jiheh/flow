'use strict';

let express = require('express');
let router = express.Router();
let path = require('path');

let rootPath = path.join(__dirname, '..', '..');
let publicPath = path.join(rootPath, 'public');

router.use(express.static(publicPath));

module.exports = router;
