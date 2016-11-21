import React, { PropTypes } from 'react';

import { propTypes as backgroundImagePropTypes } from '../reducers/backgroundImage';

const BackgroundImage = ({ backgroundImage }) => (
  <div
    className="background-image-wrapper"
    style={{
      position: 'fixed',
      top: '-50%',
      left: '-50%',
      width: '200%',
      height: '200%',
      zIndex: '-1',
    }}
  >
    <img
      className="backround-image"
      role="presentation"
      src={backgroundImage}
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        margin: 'auto',
        minWidth: '50%',
        minHeight: '50%',
      }}
    />
  </div>
);

BackgroundImage.propTypes = {
  backgroundImage: backgroundImagePropTypes,
};

export default BackgroundImage;
