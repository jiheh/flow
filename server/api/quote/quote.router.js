'use strict';

const fs = require('fs');
const path = require('path');
const router = require('express').Router(); // eslint-disable-line new-cap

router.get('/random', (req, res, next) => {
  const quoteDir = path.join(__dirname, '..', '..', '..', 'public', 'quotes');
  fs.readdir(quoteDir, (err, files) => {
    if (err) {
      next(err);
    } else {
      const numFiles = files.length;
      const quoteToSend = files[Math.floor(Math.random() * numFiles)];
      res.sendFile(quoteDir + '/' + quoteToSend);
    }
  });
});

module.exports = router;
