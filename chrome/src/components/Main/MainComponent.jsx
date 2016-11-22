import React, { Component, PropTypes } from 'react';

import { propTypes as settingsPropTypes } from '../../reducers/settings';
import { propTypes as userPropTypes } from '../../reducers/user';
import Main from './Main.jsx';
import { initialState as defaultSettings } from '../../reducers/settings';

class MainComponent extends Component {
  static propTypes = {
    settings: settingsPropTypes,
    user: userPropTypes,
  };

  componentDidMount() {
    const { settings } = this.props;

    chrome.storage.sync.get(defaultSettings, (settings) => {
      this.props.saveSettings(settings);
    });
  }

  render() {
    const { user } = this.props;

    return (
      <Main
        user={user}
      />
    );
  }
}

export default MainComponent;
