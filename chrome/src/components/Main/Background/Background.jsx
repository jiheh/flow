import React, { PropTypes } from 'react';

import BackgroundVideo from './BackgroundVideo/BackgroundVideo.jsx';
import BackgroundImage from './BackgroundImage/BackgroundImage.jsx';
import BackgroundAudio from './BackgroundAudio/BackgroundAudio.jsx';

const Background = ({
  showVideo,
  playAudio
}) => (
  <div>
    {playAudio ?
      <BackgroundAudio />
    : <div></div>
    }
    {showVideo ?
      <BackgroundVideo />
    : <BackgroundImage />
    }
  </div>
);

Background.propTypes = {
  showVideo: PropTypes.bool.isRequired,
  playAudio: PropTypes.bool.isRequired,
};

export default Background;
