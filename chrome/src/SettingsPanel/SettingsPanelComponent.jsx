import React, { Component, PropTypes } from 'react';

import SettingsPanel from './SettingsPanel.jsx';
import {
  propTypes as settingsPropTypes,
  initialState as defaultSettings,
} from '../reducers/settings';

class SettingsPanelComponent extends Component {
  static propTypes = {
    ...settingsPropTypes,
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

  render() {
    const { settings } = this.props;

    return (
      <SettingsPanel
        toggleClock={this.toggleClock}
        settings={settings}
      />
    );
  }
}

export default SettingsPanelComponent;
