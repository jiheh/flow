import React from 'react';

import './DockerSidebar.scss';
import Button from './Buttons/Button.jsx';

const DockerSidebar = ({
  toggleDockerViewport,
  activeWidget,
  invites,
  currentChannels,
}) => (
  <div className="docker-sidebar">
    <Button toggleDockerViewport={toggleDockerViewport} widgetName="Flow" active={activeWidget === "Flow"}/>
    <Button toggleDockerViewport={toggleDockerViewport} widgetName="Announcements" active={activeWidget === "Announcements"}/>
    <Button
      toggleDockerViewport={toggleDockerViewport}
      widgetName="Channels"
      active={activeWidget === "Channels"}
      invites={invites}
      currentChannels={currentChannels}
    />
  </div>
);

export default DockerSidebar;


// <Button toggleDockerViewport={toggleDockerViewport} widgetName="Meditation" active={activeWidget === "Meditation"}/>
