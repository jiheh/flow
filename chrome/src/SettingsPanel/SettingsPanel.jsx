import React, { PropTypes } from 'react';

import { propTypes as settingsPropTypes } from '../reducers/settings';

const SettingsPanel = ({
  toggleClock,
  settings,
}) => (
  <div className="settings-panel">
    <button onClick={toggleClock}>Toggle Clock</button>
  </div>
);

SettingsPanel.propTypes = {
  toggleClock: PropTypes.func,
  ...settingsPropTypes,
};

export default SettingsPanel;
