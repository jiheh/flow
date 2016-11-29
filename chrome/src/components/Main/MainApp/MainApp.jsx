import React, { PropTypes } from 'react';

import DockerContainer from './Docker/DockerContainer.js'
import ToggleBackgroundMode from './ToggleBackgroundMode/ToggleBackgroundModeContainer.js';
import ToggleAudio from './ToggleAudio/ToggleAudioContainer.js';
import CenterPiece from './CenterPiece/CenterPieceContainer';

import './MainApp.scss';

const MainApp = ({
  saveSettings,
  invites,
  currentChannels,
}) => (
  <div className="main-app">
    <DockerContainer invites={invites} currentChannels={currentChannels} />
    <ToggleBackgroundMode saveSettings={saveSettings} />
    <ToggleAudio saveSettings={saveSettings} />
    <CenterPiece />
  </div>
);

MainApp.propTypes = {
  saveSettings: PropTypes.func.isRequired,
};

export default MainApp;
