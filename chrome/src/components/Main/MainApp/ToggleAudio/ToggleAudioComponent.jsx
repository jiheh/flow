import React, { Component, PropTypes } from 'react';

import ToggleAudio from './ToggleAudio.jsx';
import {
  propTypes as settingsPropTypes,
  initialState as defaultSettings,
} from '../../../../reducers/settings';

class ToggleAudioComponent extends Component {
  static propTypes = {
    settings: settingsPropTypes,
    saveSettings: PropTypes.func,
  }

  toggleAudio = () => {
    const { settings } = this.props;

    this.props.saveSettings(
      {...settings,
        playAudio: !settings.playAudio,
      }
    );
  }


  render() {
    const { settings } = this.props;

    return (
      <ToggleAudio
        toggleAudio={this.toggleAudio}
        settings={settings}
      />
    );
  }
}

export default ToggleAudioComponent;
