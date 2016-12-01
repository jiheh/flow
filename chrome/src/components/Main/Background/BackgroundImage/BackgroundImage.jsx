import React from 'react';
import './BackgroundImage.scss';
const Chance = require('chance');
const chance = new Chance();

const BackgroundImage = () => (
  <div className="background-image-wrapper">
    <img
      className="backround-image"
      role="presentation"
      src={ navigator.onLine  ? 'http://localhost:8080/api/images/random'
                              : `assets/img/fallback-img/${chance.integer({min:1, max:24})}.jpg`}
    />
  </div>
);

export default BackgroundImage;
