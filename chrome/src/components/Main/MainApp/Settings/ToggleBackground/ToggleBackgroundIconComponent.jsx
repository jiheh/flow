import React, { Component, PropTypes } from 'react';

import ToggleBackground from './ToggleBackgroundIcon.jsx';
import {
  propTypes as settingsPropTypes,
  initialState as defaultSettings,
} from '../../../../../reducers/settings';

class ToggleBackgroundComponent extends Component {
  static propTypes = {
    settings: settingsPropTypes,
    saveSettings: PropTypes.func,
  }

  toggleBackgroundMode = () => {
    const { settings } = this.props;

    this.props.saveSettings(
      {...settings,
        showVideo: !settings.showVideo,
      }
    );
  }

  render() {
    const { settings } = this.props;

    return (
      <ToggleBackground
        toggleBackgroundMode={this.toggleBackgroundMode}
        settings={settings}
      />
    );
  }
}

export default ToggleBackgroundComponent;
