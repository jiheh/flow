import React, { Component, PropTypes } from 'react';

import MainApp from './MainApp.jsx';

class MainAppComponent extends Component {
  static propTypes = {
    saveSettings: PropTypes.func.isRequired,
    getAnnouncements: PropTypes.func.isRequired,
    getSurveys: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getAnnouncements();
    this.props.getSurveys();
  }

  render() {
    return (
      <MainApp {...this.props} />
    );
  }
}

export default MainAppComponent;
