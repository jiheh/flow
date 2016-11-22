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

    chrome.storage.sync.set({
      ...settings,
      showVideo: !settings.showVideo,
      showImage: !settings.showImage,
    }, () => {
      this.props.saveSettings(
        {...settings,
          showVideo: !settings.showVideo,
          showImage: !settings.showImage
        });
    })
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
