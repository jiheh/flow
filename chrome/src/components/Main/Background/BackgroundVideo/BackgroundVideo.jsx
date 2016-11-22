import React from 'react';
import './BackgroundVideo.scss';

import { propTypes as backgroundVideoPropTypes } from '../../../../reducers/backgroundVideo';

const BackgroundVideo = ({ backgroundVideo }) => (
  <div className="backround-video-wrapper">
    <video
      className="background-video"
      src={`http://localhost:8080/backgroundVideos/${backgroundVideo}`}
      autoPlay
      loop
    />
  </div>
);

BackgroundVideo.propTypes = {
  backgroundVideo: backgroundVideoPropTypes,
};

export default BackgroundVideo;
