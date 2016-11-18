import React, { PropTypes } from 'react';

import { propTypes as backgroundImagePropTypes } from '../reducers/backgroundImage';
import { propTypes as settingsPropTypes } from '../reducers/settings';
import { propTypes as showSettingsPanelPropTypes } from '../reducers/showSettingsPanel';
import Clock from '../Clock/ClockComponent.jsx';
import Docker from '../Docker/DockerContainer.js';
import Widgets from '../Widgets/WidgetsContainer.js';
import SettingsPanel from '../SettingsPanel/SettingsPanelContainer.js';
import ToggleSettingsPanel from '../ToggleSettingsPanel/ToggleSettingsPanelContainer.js';

const Main = ({
  backgroundImage,
  settings,
  showSettingsPanel,
  saveSettings,
}) => (
  <div
    style={{
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
    }}
  >
    {settings.showClock && <Clock />}
    <div
      style={{
        position: 'fixed',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        zIndex: '-1',
      }}
    >
      <img
        role="presentation"
        src={backgroundImage}
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          margin: 'auto',
          minWidth: '50%',
          minHeight: '50%',
        }}
      />
    </div>
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

Main.propTypes = {
  ...backgroundImagePropTypes,
  ...settingsPropTypes,
  ...showSettingsPanelPropTypes,
  saveSettings: PropTypes.func.isRequired,
};

export default Main;
