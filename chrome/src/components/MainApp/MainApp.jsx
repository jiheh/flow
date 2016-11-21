import React, { PropTypes } from 'react';

import { propTypes as showSettingsPanelPropTypes } from '../../reducers/showSettingsPanel';
import Docker from './Docker/DockerContainer.js'
import Widgets from './Widgets/WidgetsContainer.js';
import SettingsPanel from './SettingsPanel/SettingsPanelContainer.js';
import ToggleSettingsPanel from './ToggleSettingsPanel/ToggleSettingsPanelContainer.js';
import CenterPiece from './CenterPiece/CenterPieceContainer';

import './MainApp.scss';

const MainApp = ({
  showSettingsPanel,
  saveSettings,
}) => (
  <div className="main-app">
    <Docker />
    <ToggleSettingsPanel />
    {showSettingsPanel &&
     <SettingsPanel
       saveSettings={saveSettings}
     />
    }
    <CenterPiece />
    <Widgets />
  </div>
);

MainApp.propTypes = {
  showSettingsPanel: showSettingsPanelPropTypes,
  saveSettings: PropTypes.func.isRequired,
};

export default MainApp;
