import React, { PropTypes } from 'react';

import DockerContainer from './Docker/DockerContainer.js'
import CenterPiece from './CenterPiece/CenterPieceContainer';
import SettingsContainer from './Settings/SettingsContainer';

import './MainApp.scss';

const MainApp = ({
  invites,
  currentChannels,
}) => (
  <div className="main-app">
    <DockerContainer invites={invites} currentChannels={currentChannels} />
    <SettingsContainer />
    <CenterPiece />
  </div>
);

export default MainApp;
