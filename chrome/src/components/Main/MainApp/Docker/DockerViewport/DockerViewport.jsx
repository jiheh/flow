import React from 'react';

import './DockerViewport.scss';

import AnnouncementWidget from '../Widgets/AnnouncementWidget/AnnouncementWidgetContainer';
import MeditationWidget from '../Widgets/MeditationWidget/MeditationWidgetContainer';
import ReflectionWidget from '../Widgets/ReflectionWidget/ReflectionWidgetContainer';
import SettingsWidget from '../Widgets/SettingsWidget/SettingsWidgetContainer';

const DockerViewport = ({
  activeWidget,
}) => (

  <div className="docker-viewport" >
    {activeWidget === 'Announcements' ? <AnnouncementWidget /> : null}
    {activeWidget === 'Meditation' ? <MeditationWidget /> : null}
    {activeWidget === 'Reflection' ? <ReflectionWidget /> : null}
    {activeWidget === 'Settings' ? <SettingsWidget /> : null}
  </div>
);

export default DockerViewport;
