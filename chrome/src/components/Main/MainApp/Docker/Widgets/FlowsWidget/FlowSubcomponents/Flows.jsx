import React, { PropTypes } from 'react';

import '../../AnnouncementWidget/AnnouncementWidget.scss';
import Line from '../../WidgetComponents/Line.jsx';
import one from './37.jpg';
import two from './31.jpg';
import three from './33.jpg';
// const two = require('./31.jpg');
// const three = require('./33.jpg');

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

// <img src={one}></img>
// <img src={two}></img>
// <img src={three}></img>
// <img src={one}></img>
// <img src={two}></img>
// <img src={three}></img>
// <img src={one}></img>
// <img src={two}></img>
// <img src={three}></img>
