import React from 'react';
import './BackgroundVideo.scss';

const BackgroundVideo = () => (
  <div className="backround-video-wrapper">
    <video
      className="background-video"
      src={`http://localhost:8080/backgroundVideos/${backgroundVideo}`}
      autoPlay
      loop
    />
  </div>
);

export default BackgroundVideo;
