import React from 'react';

import './PlayerComponents.scss';
import PlayButton from './PlayButtonComponent.jsx';

const TrackComponent = ({ trackName, trackLength }) => (
  <div className="track">
    <PlayButton />
    <span className="track-name">{trackName}</span>
    <span className="track-length">{trackLength}</span>
  </div>
);

export default TrackComponent ;
