import React, { Component, PropTypes } from 'react';

import ToggleAudio from './ToggleAudioIcon.jsx';
import {
  propTypes as settingsPropTypes,
  initialState as defaultSettings,
} from '../../../../../reducers/settings';

class ToggleAudioComponent extends Component {
  static propTypes = {
    playAudio: PropTypes.bool,
    turnAudioOn: PropTypes.func,
  }

  toggleAudio = () => {
    const { turnAudioOn } = this.props;

    turnAudioOn(!this.props.playAudio)
  }

  render() {
    const { playAudio } = this.props;

    return (
      <ToggleAudio
        toggleAudio={this.toggleAudio}
        playAudio={playAudio}
      />
    );
  }
}

export default ToggleAudioComponent;
