import React from 'react';

import '../AnnouncementWidget.scss';
import Line from '../../WidgetComponents/Line.jsx';

const SingleAnnoucement = ({ title, timestamp, contents }) => (

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


export default SingleAnnoucement;
