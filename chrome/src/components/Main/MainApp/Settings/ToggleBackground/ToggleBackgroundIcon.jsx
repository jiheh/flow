import React, { PropTypes } from 'react';
import { propTypes as settingsPropTypes } from '../../../../../reducers/settings';
import photoLogo from './z-photo-camera.png';
import videoLogo from './z-video-camera.png';
import '../Settings.scss';

const ToggleBackgroundMode = ({
  toggleBackgroundMode,
  settings,
}) => (

  <div  className="setting sub-setting" 
        id="setting_toggle_background"
        style={{backgroundImage: `url(${settings.showVideo ? photoLogo : videoLogo})`}}
        onClick={toggleBackgroundMode}
        >
    <div className="setting-label">
      <span className="setting-label-span">{settings.showVideo ? "Photo" : "Video"}</span>
    </div>
  </div>

);

ToggleBackgroundMode.propTypes = {
  toggleBackgroundMode: PropTypes.func.isRequired,
  settings: settingsPropTypes,
};

export default ToggleBackgroundMode;
