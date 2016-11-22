import React, { PropTypes } from 'react';
import { propTypes as settingsPropTypes } from '../../../../reducers/settings';
import './SettingsPanel.scss';
import photoLogo from './photo-camera.png';
import videoLogo from './video-camera.png';

console.log("HELLO!!!!!!!!!!!!!!!!")
console.log()

const SettingsPanel = ({
  toggleClock,
  toggleBackgroundMode,
  settings,
  test
}) => (
  <div className="settings-panel">
    <button onClick={toggleClock}>Toggle Clock</button>
    <img
      src={settings.showVideo ? photoLogo : videoLogo}
      className="background-mode"
      onClick={toggleBackgroundMode}
    />
  </div>
);

SettingsPanel.propTypes = {
  toggleClock: PropTypes.func.isRequired,
  toggleBackgroundMode: PropTypes.func.isRequired,
  settings: settingsPropTypes,
};

export default SettingsPanel;
