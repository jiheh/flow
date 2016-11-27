import React from 'react';
import './BackgroundAudio.scss';

const BackgroundVideo = () => (
  <div className="backround-audio-wrapper">
    <audio
      className="background-audio"
      src={'http://localhost:8080/api/songs/random'}
      autoPlay
      loop
    />
  </div>
);

export default BackgroundVideo;
