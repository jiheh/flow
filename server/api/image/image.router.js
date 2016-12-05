'use strict';

const fs = require('fs');
const path = require('path');
const router = require('express').Router(); // eslint-disable-line new-cap

router.get('/random', (req, res, next) => {
  const imageDir = path.join(__dirname, '..', '..', '..', 'public', 'backgroundImages');
  const now = new Date();
  const epochDays = Math.floor(now/8.64e7);

  fs.readdir(imageDir, (err, files) => {
    if (err) {
      next(err);
    } else {
      const numFiles = files.length;
      // const imageToSend = files[epochDays % numFiles];
      const imageToSend = files[files.length - 1];
      // const imageToSend = files[Math.floor(Math.random() * numFiles)];
      const imagePath = path.join(imageDir, imageToSend);
      res.sendFile(imagePath);
    }
  });
});

module.exports = router;
