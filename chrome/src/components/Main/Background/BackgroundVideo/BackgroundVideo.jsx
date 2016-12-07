/* global navigator */
import React from 'react';
import './BackgroundVideo.scss';
import server from '../../../../server.js';
import Chance from 'chance';

const chance = new Chance();

const BackgroundVideo = () => (
  <div className="background-video-wrapper">
    <video
      className="background-video"
      src={navigator.onLine ? `${server}api/videos/random`
        : `assets/videos/fallback-videos/${chance.integer({ min: 4, max: 4 })}.mp4`}
      autoPlay
      loop
    />
  </div>
);

export default BackgroundVideo;
