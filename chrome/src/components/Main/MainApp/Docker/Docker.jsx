import React, { PropTypes } from 'react';

import './Docker.scss';
import Button from './DockerButtons/Button.jsx';

const Docker = ({
  toggleMeditationVisibility,
}) => (
  <div className="docker">
    <Button />
    <Button />
    <Button />
    <Button />
  </div>
);

Docker.propTypes = {
  toggleMeditationVisibility: PropTypes.func,
};

export default Docker;
