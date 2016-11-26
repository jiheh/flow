import React, { PropTypes } from 'react';
import { propTypes as settingsPropTypes } from '../../../../reducers/settings';
import './ToggleBackgroundMode.scss';
import photoLogo from './photo-camera.png';
import videoLogo from './video-camera.png';

const ToggleBackgroundMode = ({
  toggleBackgroundMode,
  settings,
}) => (
  <div className="toggle-background-mode">
    <img
      src={settings.showVideo ? photoLogo : videoLogo}
      className="background-mode"
      onClick={toggleBackgroundMode}
    />
  </div>
);

ToggleBackgroundMode.propTypes = {
  toggleBackgroundMode: PropTypes.func.isRequired,
  settings: settingsPropTypes,
};

export default ToggleBackgroundMode;
