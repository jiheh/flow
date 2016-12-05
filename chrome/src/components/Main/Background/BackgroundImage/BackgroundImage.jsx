import React from 'react';
import './BackgroundImage.scss';
const Chance = require('chance');
const chance = new Chance();

const BackgroundImage = ({interpolatingStyle}) => (
  <div 	className="background-image" 
  		style={navigator.onLine ? {backgroundImage: 'url(http://localhost:8080/api/images/random)'}
  								: {backgroundImage: `url(assets/img/fallback-img/${chance.integer({min:1, max:24})}.jpg)`}} />
);

export default BackgroundImage;
