'use strict';

const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();
const path = require('path');

const rootPath = path.join(__dirname, '..', '..');
const publicPath = path.join(rootPath, 'public');
const videosPath = path.join(publicPath, 'backgroundVideos');

router.use('/', express.static(publicPath));

// set cache time for background videos to prevent
// browser refetch each time the video loops
const cacheTime = '1d';
router.use('/backgroundVideos', express.static(videosPath, { maxAge: cacheTime }));

const blueprintPath = path.join(rootPath, 'node_modules', '@blueprintjs', 'core', 'dist', 'blueprint.css');
const blueprintMapPath = path.join(rootPath, 'node_modules', '@blueprintjs', 'core', 'dist', 'blueprint.css.map');
const blueprintIconsPath = path.join(rootPath, 'node_modules', '@blueprintjs', 'core', 'resources');

router.use('/css/blueprint.css', express.static(blueprintPath));
router.use('/css/blueprint.css.map', express.static(blueprintMapPath));
router.use('/resources', express.static(blueprintIconsPath));

module.exports = router;
