import React from 'react';

import './DockerViewport.scss';

import AnnouncementWidget from '../Widgets/AnnouncementWidget/AnnouncementWidgetContainer';
import MeditationWidget from '../Widgets/MeditationWidget/MeditationWidgetContainer';
import ReflectionWidget from '../Widgets/ReflectionWidget/ReflectionWidgetContainer';
import SettingsWidget from '../Widgets/SettingsWidget/SettingsWidgetContainer';
import ChannelsWidget from '../Widgets/ChannelsWidget/ChannelsWidgetContainer';

const DockerViewport = ({
  activeWidget,
  invites,
  currentChannels,
}) => (

  <div className="docker-viewport" >
    {activeWidget === 'Announcements' ? <AnnouncementWidget /> : null}
    {activeWidget === 'Meditation' ? <MeditationWidget /> : null}
    {activeWidget === 'Reflection' ? <ReflectionWidget /> : null}
    {activeWidget === 'Channels' ? <ChannelsWidget invites={invites} currentChannels={currentChannels} /> : null}
    {activeWidget === 'Settings' ? <SettingsWidget /> : null}
  </div>
);

export default DockerViewport;
