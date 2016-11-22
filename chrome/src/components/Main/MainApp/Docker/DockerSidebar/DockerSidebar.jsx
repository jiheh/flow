import React from 'react';

import './DockerSidebar.scss';
import Button from './Buttons/Button.jsx';

const DockerSidebar = ({
  toggleDockerViewport,
}) => (
  <div className="docker-sidebar">
    <Button toggleDockerViewport={toggleDockerViewport} widgetName="Announcements"/>
    <Button toggleDockerViewport={toggleDockerViewport} widgetName="Meditation"/>
    <Button toggleDockerViewport={toggleDockerViewport} widgetName="Reflection"/>
    <Button toggleDockerViewport={toggleDockerViewport} widgetName="Settings"/>
  </div>
);

export default DockerSidebar;
