import React from 'react';

import Line from '../WidgetComponents/Line.jsx';
import '../Widgets.scss';

import SingleAnnouncement from './AnnouncementSubcomponents/SingleAnnouncement.jsx';

const AnnouncementWidget = ({ allAnnouncements, unread }) => (
  <div className="announcement-widget widget">

    <div className="widget-nav">
      <h4 className="widget-title">
        COMMUNITY MESSAGES
      </h4>
    </div>

    <Line />

    <div className="widget-contents">
      {
        allAnnouncements.length && allAnnouncements.map((announcement, index ) => (
            <SingleAnnouncement
              key = {index}
              title = {announcement.title}
              timestamp = {announcement.timestamp}
              contents = {announcement.contents}
            />
          )
        )
      }
    </div>

  </div>
);


export default AnnouncementWidget;


