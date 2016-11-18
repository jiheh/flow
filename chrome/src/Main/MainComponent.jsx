import React, { Component, PropTypes } from 'react';

import { propTypes as backgroundImagePropTypes } from '../reducers/backgroundImage';
import { propTypes as settingsPropTypes } from '../reducers/settings';
import Main from './Main.jsx';

class MainComponent extends Component {
  static propTypes = {
    getBackgroundImage: PropTypes.func.isRequired,
    ...backgroundImagePropTypes,
    ...settingsPropTypes,
  };

  componentDidMount() {
    this.props.getBackgroundImage();
  }

  render() {
    return (
      <Main {...this.props}/>
    );
  }
}

export default MainComponent;
