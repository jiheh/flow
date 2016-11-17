import React, { PropTypes } from 'react';
import Clock from '../Clock/ClockComponent.jsx';

const Main = ({ backgroundImage }) => (
  <div
    style={{
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
    }}
  >
    <Clock />
    <div
      style={{
        position: 'fixed',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
      }}
    >
      <img
        role="presentation"
        src={backgroundImage}
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          margin: 'auto',
          minWidth: '50%',
          minHeight: '50%',
          zIndex: '-1',
        }}
      />
    </div>
  </div>
);

Main.propTypes = {
  backgroundImage: PropTypes.string,
};

export default Main;
