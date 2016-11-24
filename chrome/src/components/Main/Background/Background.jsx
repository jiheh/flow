import React, { PropTypes } from 'react';

import { propTypes as backgroundImagePropTypes } from '../../../reducers/backgroundImage';
import { propTypes as backgroundVideoPropTypes } from '../../../reducers/backgroundVideo';
import BackgroundVideo from './BackgroundVideo/BackgroundVideo.jsx';
import BackgroundImage from './BackgroundImage/BackgroundImage.jsx';

const Background = ({
  backgroundImage,
  backgroundVideo,
  showVideo,
}) => (
  <div>
    {showVideo ?
      <BackgroundVideo backgroundVideo={backgroundVideo} />
    : <BackgroundImage backgroundImage={backgroundImage} />
    }
  </div>
);

Background.propTypes = {
  backgroundImage: backgroundImagePropTypes,
  backgroundVideo: backgroundVideoPropTypes,
  showVideo: PropTypes.bool.isRequired,
};

export default Background;
