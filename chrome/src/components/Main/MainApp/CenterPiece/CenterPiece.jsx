import React, { PropTypes } from 'react';
import Clock from './Clock/ClockComponent.jsx';
import Greeting from './Greeting/GreetingContainer.js';
import './CenterPiece.scss';

const CenterPiece = ({
  showClock,
}) => (
  <div className="center-piece">
    {showClock && <Clock />}
    <Greeting />
  </div>
);

CenterPiece.propTypes = {
  showClock: PropTypes.bool,
};

export default CenterPiece;
