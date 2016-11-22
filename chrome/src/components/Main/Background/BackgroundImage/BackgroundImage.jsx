import React, { PropTypes } from 'react';
import './BackgroundImage.scss';

import { propTypes as backgroundImagePropTypes } from '../../../../reducers/backgroundImage';

const BackgroundImage = ({ backgroundImage }) => (
  <div className="background-image-wrapper">
    <img
      className="backround-image"
      role="presentation"
      src={`http://localhost:8080/backgroundImages/${backgroundImage}`}
    />
  </div>
);

BackgroundImage.propTypes = {
  backgroundImage: backgroundImagePropTypes,
};

export default BackgroundImage;
