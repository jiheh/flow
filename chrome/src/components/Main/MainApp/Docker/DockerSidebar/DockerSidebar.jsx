import React from 'react';

import './DockerSidebar.scss';
import Button from './Buttons/Button.jsx';

const DockerSidebar = ({
  toggleDockerViewport,
  activeWidget,
  invites,
}) => (
  <div className="docker-sidebar">
    <Button toggleDockerViewport={toggleDockerViewport} widgetName="Announcements" active={activeWidget === "Announcements" ? true : false}/>
    <Button toggleDockerViewport={toggleDockerViewport} widgetName="Meditation" active={activeWidget === "Meditation" ? true : false}/>
    <Button toggleDockerViewport={toggleDockerViewport} widgetName="Reflection" active={activeWidget === "Reflection" ? true : false}/>
    <Button
      toggleDockerViewport={toggleDockerViewport}
      widgetName="Channels"
      active={activeWidget === "Channels" ? true : false}
      invites={invites}
    />
    <Button toggleDockerViewport={toggleDockerViewport} widgetName="Settings" active={activeWidget === "Settings" ? true : false}/>

    {window.onclick = () => toggleDockerViewport(activeWidget)}

  </div>
);

export default DockerSidebar;
