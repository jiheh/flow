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

  componentDidUpdate() {
    console.log("joey salads")
    console.log(this.refs)
    //this.refs.viewport.className = 'settings-viewport-off';
    if (!this.state.viewSettings) {
      // this.refs.viewporton.style.display = 'none';
    } else {
      // this.refs.viewporton.style.display = 'inline';
    }
  }

  toggleSettings = () => {
    this.refs.settings.className = this.refs.settings.className === 'settings-gear' ?
    'settings-gear-on' : 'settings-gear';
    if (this.state.viewSettings) this.refs.viewport.className = 'settings-viewport-off';
    let timeout = this.state.viewSettings ? 600 : 0;
    setTimeout(() => {
      this.setState({
        viewSettings: !this.state.viewSettings
      })
    }, timeout);
  }

  render() {
    const { settings, saveSettings } = this.props;

    return (
      <div>
        <img
          ref='settings'
          src={settingsGear}
          className='settings-gear'
          onClick={this.toggleSettings}
        />

        {
          this.state.viewSettings ?
            <div ref='viewport' className='settings-viewport'>
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
