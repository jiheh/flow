import React from 'react';

import './DockerViewport.scss';

const DockerViewport = ({
  activeWidget,
}) => (

  <div className="docker-viewport">
    {activeWidget}
  </div>
);

export default DockerViewport;
