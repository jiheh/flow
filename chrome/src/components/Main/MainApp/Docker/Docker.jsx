import React, { PropTypes } from 'react';

import './Docker.scss';
import DockerSidebar from './DockerSidebar/DockerSidebar.jsx';
import DockerViewportContainer from './DockerViewport/DockerViewportContainer.js';

const Docker = ({
  viewportVisible,
  toggleDockerViewport,
  activeWidget,
}) => (
  <div>
  <div className="docker">
    {viewportVisible ? <DockerViewportContainer /> : null}
    <DockerSidebar toggleDockerViewport={toggleDockerViewport} activeWidget={activeWidget}/>
  </div>
</div>
);

Docker.propTypes = {
  toggleMeditationVisibility: PropTypes.func,
};

export default Docker;

// onMouseLeave={() => viewportVisible && toggleDockerViewport(activeWidget)}
