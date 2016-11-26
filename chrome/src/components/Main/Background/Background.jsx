import React, { PropTypes } from 'react';

import BackgroundVideo from './BackgroundVideo/BackgroundVideo.jsx';
import BackgroundImage from './BackgroundImage/BackgroundImage.jsx';

const Background = ({
  showVideo,
}) => (
  <div>
    {showVideo ?
      <BackgroundVideo />
    : <BackgroundImage />
    }
  </div>
);

Background.propTypes = {
  showVideo: PropTypes.bool.isRequired,
};

export default Background;
