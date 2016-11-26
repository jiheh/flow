import React from 'react';
import './BackgroundImage.scss';

const BackgroundImage = () => (
  <div className="background-image-wrapper">
    <img
      className="backround-image"
      role="presentation"
      src={'http://localhost:8080/api/images/random'}
    />
  </div>
);

export default BackgroundImage;
