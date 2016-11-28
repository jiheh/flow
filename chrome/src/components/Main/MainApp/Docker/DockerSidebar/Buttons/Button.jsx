import React, { PropTypes } from 'react';

import './DockerButtons.scss';
import buttonImg from './button.png';

const Button = ({
  toggleDockerViewport,
  widgetName,
  active,
  invites,
}) => (

  <img
    className={`docker-button ${active ? 'active-button' : ''} ${invites !== "" && widgetName === "Channels" ? "flashing" : ""}`}
    src={buttonImg}
    onMouseEnter={() => !active && toggleDockerViewport(widgetName)}
  />

);

export default Button;
