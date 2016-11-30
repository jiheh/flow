'use strict';

const fs = require('fs');
const path = require('path');
const router = require('express').Router(); // eslint-disable-line new-cap

router.get('/:number', (req, res, next) => {
  const quoteDir = path.join(__dirname, '..', '..', '..', 'public', 'quotes');
  fs.readdir(quoteDir, (err, files) => {
    if (err) {
      next(err);
    } else {
      const numFiles = files.length;
      const quoteToSend = files[req.params.number];
      res.sendFile(quoteDir + '/' + quoteToSend);
    }
  });
});

module.exports = router;
