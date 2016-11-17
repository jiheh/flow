import React, { PropTypes } from 'react';

const Main = ({ backgroundImage }) => (
  <div
    style={{
      position: 'fixed',
      top: '0',
      left: '0',
      zIndex: '-1',
      width: '100%',
      height: '100%',
    }}
  >
    <img
      src={backgroundImage}
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  </div>
);

Main.propTypes = {
  backgroundImage: PropTypes.string,
};

export default Main;
