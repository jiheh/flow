import React, { Component, PropTypes } from 'react';

import { propTypes as settingsPropTypes } from '../reducers/settings';
import Main from './Main.jsx';
import { initialState as defaultSettings } from '../reducers/settings';

class MainComponent extends Component {
  static propTypes = {
    settings: settingsPropTypes,
  };

  componentDidMount() {
    const { settings } = this.props;

    chrome.storage.sync.get(defaultSettings, (settings) => {
      this.props.saveSettings(settings);
    });
  }

  render() {
    return (
      <Main />
    );
  }
}

export default MainComponent;
