import React from 'react';
import './BackgroundAudio.scss';

import server from '../../../../server.js';

const BackgroundVideo = () => (
  <div className="backround-audio-wrapper">
    <audio
      className="background-audio"
      src={`${server}api/songs/random`}
      autoPlay
      loop
    />
  </div>
);

export default BackgroundVideo;
