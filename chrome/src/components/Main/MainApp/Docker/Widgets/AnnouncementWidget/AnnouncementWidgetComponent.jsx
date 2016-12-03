import React, { Component, PropTypes } from 'react';

import { propTypes as announcementsPropTypes } from '../../../../../../reducers/announcements';
import AnnouncementWidget from './AnnouncementWidget.jsx'; // import dumb component

class AnnouncementWidgetComponent extends Component {
  static propTypes = {
    announcements: announcementsPropTypes,
    unread: announcementsPropTypes,
    getAnnouncements: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getAnnouncements();
  }

  render() {
    const { announcements, unread } = this.props;

    return (
      <AnnouncementWidget
        announcements={announcements}
        unread={unread}
      />
    );
  }
}

export default AnnouncementWidgetComponent;
