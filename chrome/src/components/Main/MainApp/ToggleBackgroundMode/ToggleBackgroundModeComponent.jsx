import React, { Component, PropTypes } from 'react';

import ToggleBackgroundMode from './ToggleBackgroundMode.jsx';
import {
  propTypes as settingsPropTypes,
  initialState as defaultSettings,
} from '../../../../reducers/settings';

class ToggleBackgroundModeComponent extends Component {
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
      <ToggleBackgroundMode
        toggleBackgroundMode={this.toggleBackgroundMode}
        settings={settings}
      />
    );
  }
}

export default ToggleBackgroundModeComponent;
