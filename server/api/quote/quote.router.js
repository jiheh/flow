'use strict';

const path = require('path');
const router = require('express').Router(); // eslint-disable-line new-cap
const stockQuotes = require('./stockQuotes');
const chance = new require('chance')();


router.get('/random', (req, res, next) => {
  const randomQuote = chance.pickone(stockQuotes);
  res.json(randomQuote);
});

module.exports = router;
