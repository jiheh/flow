import React from 'react';
import TrackComponent from '../PlayerComponents/TrackComponent.jsx';

import '../../Widgets.scss';
import '../MeditationWidget.scss';

const MeditationSection = ({ meditations }) => (
  <div className="meditation-section section">
    <h4>GUIDED MEDITATIONS</h4>

    { meditations && meditations.map((track, index) => (
      <TrackComponent
        key         = {index}
        trackName   = {track.name}
        trackLength = {track.length}
      />
    ))}

  </div>
);

export default MeditationSection ;
