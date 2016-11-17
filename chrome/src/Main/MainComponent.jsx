import React, { Component, PropTypes } from 'react';

import { propTypes as backgroundImagePropTypes } from '../reducers/backgroundImage';
import Main from './Main.jsx';

class MainComponent extends Component {
  componentDidMount() {
    this.props.getBackgroundImage();
  }

  render() {
    const { backgroundImage } = this.props;

    return (
      <Main backgroundImage={backgroundImage} />
    );
  }
}

MainComponent.propTypes = {
  getBackgroundImage: PropTypes.func.isRequired,
  ...backgroundImagePropTypes,
};

export default MainComponent;
