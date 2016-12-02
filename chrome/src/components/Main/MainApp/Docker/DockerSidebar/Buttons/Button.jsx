import React, { PropTypes } from 'react';

import './DockerButtons.scss';
import buttonImg from './button.png';

const Button = ({
  toggleDockerViewport,
  widgetName,
  active,
  invites,
}) => (
  <span className="buttonHoverTextTrigger">
    <span className="buttonHoverText">{widgetName}</span>
    <img
      className={`docker-button ${active ? 'active-button' : ''} ${invites && invites.length && widgetName === "Channels" ? "flashing" : ""}`}
      src={buttonImg}
      onClick={() => toggleDockerViewport(widgetName)}
    />
  </span>

);

export default Button;
