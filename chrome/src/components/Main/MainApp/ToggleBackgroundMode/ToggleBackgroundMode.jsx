import React, { PropTypes } from 'react';
import { propTypes as settingsPropTypes } from '../../../../reducers/settings';
import './ToggleBackgroundMode.scss';
import photoLogo from './photo-camera.png';
import videoLogo from './video-camera.png';

const BackgroundMode = ({
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

BackgroundMode.propTypes = {
  toggleBackgroundMode: PropTypes.func.isRequired,
  settings: settingsPropTypes,
};

export default BackgroundMode;
