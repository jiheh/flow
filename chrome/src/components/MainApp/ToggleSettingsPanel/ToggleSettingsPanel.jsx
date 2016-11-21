import React, { PropTypes } from 'react';

const ToggleSettingsPanel = ({ toggle }) => (
  <button onClick={toggle}>TOGGLE SETTINGS PANEL</button>
);

ToggleSettingsPanel.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default ToggleSettingsPanel;
