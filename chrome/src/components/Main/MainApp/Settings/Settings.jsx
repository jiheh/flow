import React, { Component } from 'react';

import settingsGear from './z-settings.png';
import './Settings.scss';

import ToggleBackgroundComponent from './ToggleBackground/ToggleBackgroundComponent.jsx';
import ToggleAudioComponent from './ToggleAudio/ToggleAudioComponent.jsx';
import LogoutContainer from './Logout/LogoutContainer';

class SettingsWidget extends Component {

  constructor(props) {
    super(props);

    this.state = {
      viewSettings: false
    }
  }

  toggleSettings = () => {
    this.setState({
      viewSettings: !this.state.viewSettings
    })
  }

  render() {
    const { settings, saveSettings } = this.props;

    return (
      <div>
        <img
          src={settingsGear}
          className='settings-gear'
          onClick={this.toggleSettings}
        />

        {
          this.state.viewSettings ?
            <div className='settings-viewport'>
              <ToggleBackgroundComponent settings={settings} saveSettings={saveSettings} />
              <ToggleAudioComponent settings={settings} saveSettings={saveSettings} />
              <LogoutContainer />
            </div>
            : <div></div>
        }
      </div>
    )
  }
};

export default SettingsWidget;