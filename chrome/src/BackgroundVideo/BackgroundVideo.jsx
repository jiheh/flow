import React from 'react';

import { propTypes as backgroundVideoPropTypes } from '../reducers/backgroundVideo';

const BackgroundVideo = ({ backgroundVideo }) => (
  <div
    className="backround-video-wrapper"
    style={{
      position: 'fixed',
      top: '0',
      left: '0',
      zIndex: '-1',
      width: '100%',
      height: '100%',
    }}
  >
    <video className="background-video" src={backgroundVideo} autoPlay loop />
  </div>
);

BackgroundVideo.propTypes = {
  backgroundVideo: backgroundVideoPropTypes,
};

export default BackgroundVideo;
