import React from 'react';

import Line from '../WidgetComponents/Line.jsx';
import '../Widgets.scss';

import { propTypes as announcementsPropTypes } from '../../../../../../reducers/announcements';

import SingleAnnouncement from './AnnouncementSubcomponents/SingleAnnouncement.jsx';

const AnnouncementWidget = ({ announcements, unread }) => (
  <div className="announcement-widget widget">

    <h4 className="widget-title">
      Announcements
    </h4>

    <Line />

    <div className="widget-contents">
      {
        announcements.length && announcements.map((announcement, index ) => (
            <SingleAnnouncement
              key = {index}
              title = {announcement.title}
              contents = {announcement.contents}
            />
          )
        )
      }
    </div>
  </div>
);

AnnouncementWidget.propTypes = {
  announcements: announcementsPropTypes,
  unread: announcementsPropTypes,
};

export default AnnouncementWidget;
