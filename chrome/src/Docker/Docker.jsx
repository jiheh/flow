import React, { PropTypes } from 'react';

let Docker = ({
  toggleMeditationVisibility,
}) => (
  <div className="docker">
    DOCKER
    <button onClick={toggleMeditationVisibility}>
      TOGGLE MEDITATION
    </button>
  </div>
);

Docker.propTypes = {
  toggleMeditationVisibility: PropTypes.func,
};

export default Docker;
