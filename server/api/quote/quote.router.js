'use strict';

const path = require('path');
const router = require('express').Router(); // eslint-disable-line new-cap
const stockQuotes = require('./stockQuotes');
const chance = new require('chance')();


router.get('/random', (req, res, next) => {
  const randomQuote = chance.pickone(stockQuotes);
  // const now = new Date();
  // const epochDays = Math.floor(now / 8.64e7);

  // const numQuotes = stockQuotes.length;
  // const randomQuote = stockQuotes[epochDays % numQuotes];
  res.json(randomQuote);
});

module.exports = router;
