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
      padding: '18px',
      fontFamily: '"Century Gothic", Helvetica, Georgia',
      textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
      zIndex: '1',
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
