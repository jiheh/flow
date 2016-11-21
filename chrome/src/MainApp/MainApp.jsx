import React, { PropTypes } from 'react';

import { propTypes as settingsPropTypes } from '../reducers/settings';
import { propTypes as showSettingsPanelPropTypes } from '../reducers/showSettingsPanel';
import Clock from '../Clock/ClockComponent.jsx';
import Docker from '../Docker/DockerContainer.js'
import Widgets from '../Widgets/WidgetsContainer.js';
import SettingsPanel from '../SettingsPanel/SettingsPanelContainer.js';
import ToggleSettingsPanel from '../ToggleSettingsPanel/ToggleSettingsPanelContainer.js';

const MainApp = ({
  settings,
  showSettingsPanel,
  saveSettings,
}) => (
  <div>
    {settings.showClock && <Clock />}
    <Docker />
    <ToggleSettingsPanel />
    {showSettingsPanel &&
     <SettingsPanel
       saveSettings={saveSettings}
     />
    }
    <Widgets />
  </div>
);

MainApp.propTypes = {
  settings: settingsPropTypes,
  showSettingsPanel: showSettingsPanelPropTypes,
  saveSettings: PropTypes.func.isRequired,
};

export default MainApp;
