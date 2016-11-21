import React, { PropTypes } from 'react';
import './BackgroundImage.scss';

import { propTypes as backgroundImagePropTypes } from '../../../../reducers/backgroundImage';

const BackgroundImage = ({ backgroundImage }) => (
  <div className="background-image-wrapper">
    <img
      className="backround-image"
      role="presentation"
      src={backgroundImage}
    />
  </div>
);

BackgroundImage.propTypes = {
  backgroundImage: backgroundImagePropTypes,
};

export default BackgroundImage;
