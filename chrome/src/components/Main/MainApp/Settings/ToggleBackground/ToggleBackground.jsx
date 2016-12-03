import React, { PropTypes } from 'react';
import { propTypes as settingsPropTypes } from '../../../../../reducers/settings';
import photoLogo from './z-photo-camera.png';
import videoLogo from './z-video-camera.png';

const ToggleBackgroundMode = ({
  toggleBackgroundMode,
  settings,
}) => (
  <span className="hoverTextTrigger">
    <span className="hoverText">{settings.showVideo ? "Photo" : "Video"}</span>
    <img
      src={settings.showVideo ? photoLogo : videoLogo}
      className="settings-button"
      onClick={toggleBackgroundMode}
    />
  </span>
);

ToggleBackgroundMode.propTypes = {
  toggleBackgroundMode: PropTypes.func.isRequired,
  settings: settingsPropTypes,
};

export default ToggleBackgroundMode;
