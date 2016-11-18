import React, { Component, PropTypes } from 'react';

import { propTypes as backgroundImagePropTypes } from '../reducers/backgroundImage';
import { propTypes as backgroundVideoPropTypes } from '../reducers/backgroundVideo';
import { propTypes as settingsPropTypes } from '../reducers/settings';
import Main from './Main.jsx';
import { initialState as defaultSettings } from '../reducers/settings';

class MainComponent extends Component {
  static propTypes = {
    getBackgroundImage: PropTypes.func.isRequired,
    ...backgroundImagePropTypes,
    ...backgroundVideoPropTypes,
    settings: PropTypes.shape(...settingsPropTypes),
  };

  componentDidMount() {
    const { settings } = this.props;

    if (settings.showVideo) {
      this.props.getBackgroundVideo();
    } else if (settings.showImage) {
      this.props.getBackgroundImage();
    }

    console.log('mounting settings panel component');
    chrome.storage.sync.get(defaultSettings, (settings) => {
      this.props.saveSettings(settings);
    });
  }

  render() {
    return (
      <Main {...this.props}/>
    );
  }
}

export default MainComponent;
