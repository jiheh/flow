import React, { PropTypes } from 'react';

import '../AnnouncementWidget.scss';
import Line from '../../WidgetComponents/Line.jsx';

const SingleAnnouncement = ({ title, contents }) => (

  <div className="single-announcement">
    <div className="single-announcement-content">
      <h4>
        {title}
      </h4>
      <p>
        {contents}
      </p>
    </div>

    <Line />

  </div>
);

SingleAnnouncement.propTypes = {
  title: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
};


export default SingleAnnouncement;
