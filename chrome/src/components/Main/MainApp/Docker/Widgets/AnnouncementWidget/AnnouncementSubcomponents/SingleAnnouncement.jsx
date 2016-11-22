import React from 'react';

import '../AnnouncementWidget.scss';

const SingleAnnoucement = ({ title, timestamp, contents }) => (

  <div className="single-announcement">

    <div className="single-announcement-title">
      <h4>
        {title}
      </h4>
    </div>

    <div className="single-announcement-contents">
      <p>
        {contents}
      </p>
    </div>

  </div>

);


export default SingleAnnoucement;
