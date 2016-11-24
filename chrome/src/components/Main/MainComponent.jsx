import React, { Component, PropTypes } from 'react';

import { propTypes as settingsPropTypes } from '../../reducers/settings';
import { propTypes as userPropTypes } from '../../reducers/user';
import Main from './Main.jsx';
import { initialState as defaultSettings } from '../../reducers/settings';

class MainComponent extends Component {
  static propTypes = {
    settings: settingsPropTypes,
    user: userPropTypes,
    saveSettings: PropTypes.func.isRequired,
  };

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
