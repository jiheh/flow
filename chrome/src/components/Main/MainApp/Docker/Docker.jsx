import React, { PropTypes } from 'react';

import './Docker.scss';
import DockerSidebar from './DockerSidebar/DockerSidebar.jsx';
import DockerViewportContainer from './DockerViewport/DockerViewportContainer.js';

const Docker = ({
  viewportVisible,
  toggleDockerViewport,
  activeWidget,
  invites,
  currentChannels,
}) => (
  <div>
  <div className="docker">
    {viewportVisible ? <DockerViewportContainer /> : null}
    <DockerSidebar toggleDockerViewport={toggleDockerViewport} activeWidget={activeWidget} invites={invites} currentChannels={currentChannels} />
  </div>
</div>
);

Docker.propTypes = {
  toggleMeditationVisibility: PropTypes.func,
};

export default Docker;
