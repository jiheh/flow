'use strict';

const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();
const path = require('path');

const rootPath = path.join(__dirname, '..', '..');
const publicPath = path.join(rootPath, 'public');
const blueprintPath = path.join(rootPath, 'node_modules', '@blueprintjs', 'core', 'dist', 'blueprint.css');
const blueprintMapPath = path.join(rootPath, 'node_modules', '@blueprintjs', 'core', 'dist', 'blueprint.css.map');
const blueprintIconsPath = path.join(rootPath, 'node_modules', '@blueprintjs', 'core', 'resources');

router.use(express.static(publicPath));
router.use('/css/blueprint.css', express.static(blueprintPath));
router.use('/css/blueprint.css.map', express.static(blueprintMapPath));
router.use('/resources', express.static(blueprintIconsPath));

module.exports = router;
