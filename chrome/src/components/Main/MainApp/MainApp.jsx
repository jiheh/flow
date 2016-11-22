import React, { PropTypes } from 'react';

import Docker from './Docker/DockerContainer.js'
import Widgets from './Widgets/WidgetsContainer.js';
import ToggleBackgroundMode from './ToggleBackgroundMode/ToggleBackgroundModeContainer.js';
import CenterPiece from './CenterPiece/CenterPieceContainer';

import './MainApp.scss';

const MainApp = ({
  saveSettings,
}) => (
  <div className="main-app">
    <Docker />
      <ToggleBackgroundMode saveSettings={saveSettings} />
      <CenterPiece />
    <Widgets />
  </div>
);

MainApp.propTypes = {
  saveSettings: PropTypes.func.isRequired,
};

export default MainApp;
