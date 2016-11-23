import React, { PropTypes } from 'react';

import '../AnnouncementWidget.scss';

const SingleAnnouncement = ({ title, contents }) => (

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

SingleAnnouncement.propTypes = {
  title: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
};


export default SingleAnnouncement;
