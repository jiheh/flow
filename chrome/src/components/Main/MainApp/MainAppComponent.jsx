import React, { Component, PropTypes } from 'react';

import MainApp from './MainApp.jsx';

class MainAppComponent extends Component {
  static propTypes = {
    saveSettings: PropTypes.func.isRequired,
    getAnnouncements: PropTypes.func.isRequired,
    getSurveys: PropTypes.func.isRequired,
    getInvites: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getAnnouncements();
    this.props.getSurveys();
    this.props.getInvites();
  }

  render() {
    console.log("HABIBI!")
    console.log(this.props)
    return (
      <MainApp {...this.props} />
    );
  }
}

export default MainAppComponent;
