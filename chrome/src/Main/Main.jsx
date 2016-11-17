import React, { PropTypes } from 'react';
import Clock from '../Clock/ClockComponent.jsx';

const Main = ({ backgroundImage }) => (
  <div
    style={{
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
    }}
  >
    <Clock />
    <img
      role="presentation"
      src={backgroundImage}
      style={{
        width: '100%',
        height: '100%',
        zIndex: '-1',
      }}
    />
  </div>
);

Main.propTypes = {
  backgroundImage: PropTypes.string,
};

export default Main;
