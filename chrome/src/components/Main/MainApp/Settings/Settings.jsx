import React, { Component } from 'react';
import './Settings.scss';

import ToggleSettingsIcon from './ToggleSettings/ToggleSettingsIcon.jsx'
import ToggleBackgroundIcon from './ToggleBackground/ToggleBackgroundIconComponent.jsx'
import ToggleAudioIcon from './ToggleAudio/ToggleAudioIconComponent.jsx'
import LogoutIcon from './Logout/LogoutIconContainer.js'


class SettingsWidget extends Component {

  constructor(props) {
    super(props);

    this.state = {
      viewSettings: false
    }
  }

  toggleSettings = () => {
    this.setState({viewSettings: !this.state.viewSettings});
  }

  render() {
    const { settings, saveSettings } = this.props;
    return (
      <div className={`settings-container ${this.state.viewSettings ? 'settings-container-expanded' : ''}`}>

        <ToggleSettingsIcon toggleSettings={this.toggleSettings} />
        <ToggleBackgroundIcon settings={settings} saveSettings={saveSettings} />
        <ToggleAudioIcon settings={settings} saveSettings={saveSettings} />
        <LogoutIcon settings={settings} saveSettings={saveSettings} />

      </div>
    )
  }
};

export default SettingsWidget;
