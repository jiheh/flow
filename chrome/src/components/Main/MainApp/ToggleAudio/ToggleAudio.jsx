import React, { PropTypes } from 'react';
import { propTypes as settingsPropTypes } from '../../../../reducers/settings';
import './ToggleAudio.scss';
import audio from './audio.png';
import noaudio from './noaudio.png';

const ToggleAudio = ({
  toggleAudio,
  settings,
}) => (
  <div>
    <img
      src={settings.playAudio ? noaudio : audio}
      className="audio-mode"
      onClick={toggleAudio}
    />
  </div>
);

ToggleAudio.propTypes = {
  toggleAudio: PropTypes.func.isRequired,
  settings: settingsPropTypes,
};

export default ToggleAudio;
