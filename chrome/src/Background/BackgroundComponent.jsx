import React, { Component, PropTypes } from 'react';

import { propTypes as backgroundImagePropTypes } from '../reducers/backgroundImage';
import { propTypes as backgroundVideoPropTypes } from '../reducers/backgroundVideo';
import Background from './Background.jsx';

class BackgroundComponent extends Component {
  static propTypes = {
    getBackgroundImage: PropTypes.func.isRequired,
    getBackgroundVideo: PropTypes.func.isRequired,
    backgroundImage: backgroundImagePropTypes,
    backgroundVideo: backgroundVideoPropTypes,
    showVideo: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.props.getBackgroundVideo();
    this.props.getBackgroundImage();
  }

  render() {
    const {
      backgroundImage,
      backgroundVideo,
      showVideo,
    } = this.props;

    return (
      <Background
        backgroundImage={backgroundImage}
        backgroundVideo={backgroundVideo}
        showVideo={showVideo}
      />
    );
  }
}

export default BackgroundComponent;
