import React, { PropTypes } from 'react';

const Clock = ({ hour, minute }) => (
  <div
    className="clock"
    style={{
      position: 'fixed',
      top: '0',
      left: '0',
      color: 'white',
      fontSize: '34px',
      padding: '12px',
      fontFamily: 'Helvetica'
    }}
  >
    {hour}:{minute}
  </div>
);

Clock.propTypes = {
  hour: PropTypes.string.isRequired,
  minute: PropTypes.string.isRequired,
};

export default Clock;
