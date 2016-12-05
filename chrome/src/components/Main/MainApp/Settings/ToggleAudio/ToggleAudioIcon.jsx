import React, { PropTypes } from 'react';
import { propTypes as settingsPropTypes } from '../../../../../reducers/settings';
import audio from './z-audio.png';
import noaudio from './z-noaudio.png';
import '../Settings.scss';

const ToggleAudio = ({
  toggleAudio,
  settings,
}) => (
  <div  className="setting sub-setting" 
        id="setting_toggle_audio"
        style={{backgroundImage: `url(${settings.playAudio ? noaudio : audio})`}}
        onClick={toggleAudio}
        >
    <div className="setting-label">
      <span className="setting-label-span">Audio</span>
    </div>
  </div>
);

ToggleAudio.propTypes = {
  toggleAudio: PropTypes.func.isRequired,
  settings: settingsPropTypes,
};

export default ToggleAudio;
