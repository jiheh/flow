import React, { Component, PropTypes } from 'react';

import AnnouncementWidget from './AnnouncementWidget.jsx'; // import dumb component

class AnnouncementWidgetComponent extends Component {

  // static propTypes = {
  //   settings: settingsPropTypes,
  //   saveSettings: PropTypes.func,
  // }
  //
  // toggleBackgroundMode = () => {
  //   const { settings } = this.props;
  //
  //   chrome.storage.sync.set({
  //     ...settings,
  //     showVideo: !settings.showVideo,
  //     showImage: !settings.showImage,
  //   }, () => {
  //     this.props.saveSettings(
  //       {...settings,
  //         showVideo: !settings.showVideo,
  //         showImage: !settings.showImage
  //       });
  //   })
  // }

  render() {
    const {  } = this.props;

    return (
      <AnnouncementWidget

      />
    );
  }
}

export default AnnouncementWidgetComponent;
