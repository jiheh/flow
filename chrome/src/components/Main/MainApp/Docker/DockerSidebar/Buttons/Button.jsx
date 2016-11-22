import React, { PropTypes } from 'react';

import './DockerButtons.scss';
import buttonImg from './button.png';

const Button = ({
  toggleDockerViewport,
  widgetName,
}) => (

  <img className="docker-button" src={buttonImg} onClick={() => toggleDockerViewport(widgetName)}/>

);

export default Button;













