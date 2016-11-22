import React, { PropTypes } from 'react';

import './DockerButtons.scss';
import buttonImg from './button.png';

const Button = ({
  toggleDockerViewport,
  widgetName,
  active,
}) => (

  <img className={`docker-button ${active ? 'active-button' : ''}`} src={buttonImg} onClick={() => toggleDockerViewport(widgetName)}/>

);

export default Button;













