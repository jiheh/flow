import React from 'react';

import './PlayerComponents.scss';
import PlayIcon from './play.png';
import PauseIcon from './pause.png';


const PlayButton = ({ }) => (
  <div className="play-button">
    <img src={PlayIcon} />
    {/*<img src={PauseIcon} />*/}

  </div>
);

export default PlayButton;
