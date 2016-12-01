import React from 'react';
import './BackgroundVideo.scss';

const BackgroundVideo = () => (
  <div className="background-video-wrapper">
    <video
      className="background-video"
      src={ navigator.onLine  ? 'http://localhost:8080/api/videos/random'
        : `assets/videos/fallback-videos/${chance.integer({min:4, max:4})}.mp4`}
      autoPlay
      loop
    />
  </div>
);

export default BackgroundVideo;
