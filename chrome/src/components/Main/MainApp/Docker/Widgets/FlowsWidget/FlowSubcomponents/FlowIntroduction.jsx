import React, { PropTypes } from 'react';

import '../../AnnouncementWidget/AnnouncementWidget.scss';
import Line from '../../WidgetComponents/Line.jsx';

const FlowIntroduction = () => (

  <div className="single-announcement">
    <div className="single-announcement-content">
      <h4>
        Welcome to Flow!
      </h4>
      <p>
        Flow is your personal dashboard, your online sanctuary, your home away from home. Enjoy life, and go with the flow!
      </p>
    </div>

    <Line />

  </div>
);

FlowIntroduction.propTypes = {

};


export default FlowIntroduction;
