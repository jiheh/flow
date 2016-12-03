import React, { Component, PropTypes } from 'react';

import MainApp from './MainApp.jsx';

class MainAppComponent extends Component {
  static propTypes = {
    getSurveys: PropTypes.func.isRequired,
    getInvites: PropTypes.func.isRequired,
    getChannels: PropTypes.func.isRequired,
  }
  
  componentDidMount() {
    this.props.getSurveys();
    this.props.getInvites();
    this.props.getChannels();
  }

  render() {
    return (
      <MainApp {...this.props} />
    );
  }
}

export default MainAppComponent;
