import React, { Component, PropTypes } from 'react';

import SettingsWidget from './SettingsWidget.jsx'; // import dumb component

class SettingsWidgetComponent extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
  }

  render() {
    const {  } = this.props;

    return (
      <SettingsWidget {...this.props} />
    );
  }
}

export default SettingsWidgetComponent;
