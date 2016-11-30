import React from 'react';

import '../../Widgets.scss';
import TrackComponent from '../PlayerComponents/TrackComponent.jsx';

const SoundSection = ({ sounds }) => (
  <div className="sounds-section section">
    <h4>SOOTHING SOUNDS</h4>

    { sounds && sounds.map((track, index) => (
      <TrackComponent
        key         = {index}
        trackName   = {track.name}
        trackLength = {track.length}
      />
    ))}

  </div>
);

export default SoundSection ;
