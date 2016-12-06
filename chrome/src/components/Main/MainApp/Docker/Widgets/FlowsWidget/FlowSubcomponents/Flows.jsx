import React, { PropTypes } from 'react';

import '../../AnnouncementWidget/AnnouncementWidget.scss';
import Line from '../../WidgetComponents/Line.jsx';

const Flows = () => (

  <div className="single-announcement">
    <div className="single-announcement-content">
      <h4>
        Beta is out!
      </h4>
      <p>
        The Flow beta version has now been deployed.
      </p>
    </div>

    <Line />

  </div>
);

Flows.propTypes = {

};


export default Flows;
