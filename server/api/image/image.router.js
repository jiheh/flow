'use strict';

const fs = require('fs');
const path = require('path');
const router = require('express').Router(); // eslint-disable-line new-cap

router.get('/random', (req, res, next) => {
  const imageDir = path.join(__dirname, '..', '..', '..', 'public', 'backgroundImages');
  fs.readdir(imageDir, (err, files) => {
    if (err) {
      next(err);
    } else {
      const numFiles = files.length;
      const imageToSend = files[Math.floor(Math.random() * numFiles)];
      res.json(imageToSend);
    }
  });
});

module.exports = router;
