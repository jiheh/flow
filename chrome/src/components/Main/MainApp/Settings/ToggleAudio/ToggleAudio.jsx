import React, { PropTypes } from 'react';
import { propTypes as settingsPropTypes } from '../../../../../reducers/settings';
import audio from './z-audio.png';
import noaudio from './z-noaudio.png';

const ToggleAudio = ({
  toggleAudio,
  settings,
}) => (
  <span>
    <img
      src={settings.playAudio ? noaudio : audio}
      className="settings-button"
      onClick={toggleAudio}
    />
  </span>
);

ToggleAudio.propTypes = {
  toggleAudio: PropTypes.func.isRequired,
  settings: settingsPropTypes,
};

export default ToggleAudio;
