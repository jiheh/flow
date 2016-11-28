import React, { PropTypes } from 'react';

import './Docker.scss';
import DockerSidebar from './DockerSidebar/DockerSidebar.jsx';
import DockerViewportContainer from './DockerViewport/DockerViewportContainer.js';

const Docker = ({
  viewportVisible,
  toggleDockerViewport,
  activeWidget,
  invites,
}) => (
  <div>
  <div className="docker" onMouseLeave={() => viewportVisible && toggleDockerViewport(activeWidget)}>
    {viewportVisible ? <DockerViewportContainer /> : null}
    <DockerSidebar toggleDockerViewport={toggleDockerViewport} activeWidget={activeWidget} invites={invites}/>
  </div>
</div>
);

Docker.propTypes = {
  toggleMeditationVisibility: PropTypes.func,
};

export default Docker;
