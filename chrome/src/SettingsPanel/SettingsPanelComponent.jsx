import React, { Component, PropTypes } from 'react';

import SettingsPanel from './SettingsPanel.jsx';
import {
  propTypes as settingsPropTypes,
  initialState as defaultSettings,
} from '../reducers/settings';

class SettingsPanelComponent extends Component {
  static propTypes = {
    settings: PropTypes.shape(...settingsPropTypes),
    saveSettings: PropTypes.func,
  }

  toggleClock = () => {
    const { settings } = this.props;

    chrome.storage.sync.set({
      ...settings,
      showClock: !settings.showClock
    }, () => {
      console.log('saving settings');
      this.props.saveSettings({...settings, showClock: !settings.showClock});
    });
  }

  toggleBackgroundMode = () => {
    const { settings } = this.props;

    chrome.storage.sync.set({
      ...settings,
      showVideo: !settings.showVideo,
      showImage: !settings.showImage,
    }, () => {
      console.log('toggled background mode, saving to browser');
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
      <SettingsPanel
        toggleClock={this.toggleClock}
        toggleBackgroundMode={this.toggleBackgroundMode}
        settings={settings}
      />
    );
  }
}

export default SettingsPanelComponent;
