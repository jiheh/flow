import React, { PropTypes } from 'react';

import '../../AnnouncementWidget/AnnouncementWidget.scss';
import Line from '../../WidgetComponents/Line.jsx';

const Flows = () => (

  <div className="single-announcement">
    <div className="single-announcement-content">
      <h4>
        Daily Flows
      </h4>
      <div className="square"><p>PRODUCTIVITY</p></div>
      <div className="square"><p>WELL-BEING</p></div>
      <div className="square"><p>HAPPINESS</p></div>
    </div>

    <Line />

  </div>
);

Flows.propTypes = {

};


export default Flows;
