import React, { PropTypes } from 'react';
import './Greeting.scss';

const Greeting = ({
  message,
}) => (
  <div className="greeting">
    <h1>{message}</h1>
  </div>
);

Greeting.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Greeting;
