import React, { PropTypes } from 'react';
import './Clock.scss';

const Clock = ({ hour, minute }) => (
  <div className="clock">
    {hour}:{minute}
  </div>
);

Clock.propTypes = {
  hour: PropTypes.string.isRequired,
  minute: PropTypes.string.isRequired,
};

export default Clock;
