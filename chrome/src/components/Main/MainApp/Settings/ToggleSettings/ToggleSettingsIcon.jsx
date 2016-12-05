import React, { PropTypes } from 'react';
import settingsGearIconSrc from './z-settings.png';
import '../Settings.scss';

const ToggleSettingsIcon = ({
  toggleSettings
}) => (
        <div  className="setting" 
              id="setting_toggle_settings" 
              style={{backgroundImage: `url(${settingsGearIconSrc})`}}
              onClick={toggleSettings}>
          <div className="setting-label">
          	<span className="setting-label-span">Settings</span>
      	  </div>
        </div>
);

export default ToggleSettingsIcon;


