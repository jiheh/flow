import React from 'react';

import './DockerViewport.scss';

import AnnouncementWidget from '../Widgets/AnnouncementWidget/AnnouncementWidgetContainer';
import MeditationWidget from '../Widgets/MeditationWidget/MeditationWidgetContainer';
import FlowsWidget from '../Widgets/FlowsWidget/FlowsWidgetContainer';
import ChannelsWidget from '../Widgets/ChannelsWidget/ChannelsWidgetContainer';

const DockerViewport = ({
  activeWidget,
  invites,
  currentChannels,
}) => (

  <div className="docker-viewport" >
    {activeWidget === 'Announcements' ? <AnnouncementWidget /> : null}
    {activeWidget === 'Meditation' ? <MeditationWidget /> : null}
    {activeWidget === 'Flows' ? <FlowsWidget /> : null}
    {activeWidget === 'Channels' ? <ChannelsWidget invites={invites} currentChannels={currentChannels} /> : null}
  </div>
);

export default DockerViewport;
