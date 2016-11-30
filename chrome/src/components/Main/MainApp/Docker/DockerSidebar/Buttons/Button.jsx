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
    className={`docker-button ${active ? 'active-button' : ''} ${invites && invites.length && widgetName === "Channels" ? "flashing" : ""}`}
    src={buttonImg}
    onClick={() => toggleDockerViewport(widgetName)}
  />

);

export default Button;
