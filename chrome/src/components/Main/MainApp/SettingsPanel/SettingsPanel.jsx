import React, { PropTypes } from 'react';

import { propTypes as settingsPropTypes } from '../../../../reducers/settings';

const SettingsPanel = ({
  toggleClock,
  toggleBackgroundMode,
  settings,
}) => (
  <div className="settings-panel">
    <button onClick={toggleClock}>Toggle Clock</button>
    <button onClick={toggleBackgroundMode}>Toggle Background</button>
  </div>
);

SettingsPanel.propTypes = {
  toggleClock: PropTypes.func.isRequired,
  toggleBackgroundMode: PropTypes.func.isRequired,
  settings: settingsPropTypes,
};

export default SettingsPanel;
