/* global navigator */
import React from 'react';
import './BackgroundImage.scss';
import server from '../../../../server.js';
import Chance from 'chance';

const chance = new Chance();

const BackgroundImage = () => (
  <div
    className="background-image"
    style={navigator.onLine ?
      { backgroundImage: `url(${server}api/images/random)` }
      : { backgroundImage: `url(assets/img/fallback-img/${chance.integer({ min: 1, max: 24 })}.jpg)` }}
  />
);

export default BackgroundImage;
