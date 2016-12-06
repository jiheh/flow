import React from 'react';

import './DockerViewport.scss';

import AnnouncementWidget from '../Widgets/AnnouncementWidget/AnnouncementWidgetContainer';
import FlowsWidget from '../Widgets/FlowsWidget/FlowsWidgetContainer';
import ChannelsWidget from '../Widgets/ChannelsWidget/ChannelsWidgetContainer';

const DockerViewport = ({
  activeWidget,
  invites,
  currentChannels,
}) => (

  <div className="docker-viewport" >
    {activeWidget === 'Announcements' ? <AnnouncementWidget /> : null}
    {activeWidget === 'Flow' ? <FlowsWidget /> : null}
    {activeWidget === 'Channels' ? <ChannelsWidget invites={invites} currentChannels={currentChannels} /> : null}
  </div>
);

export default DockerViewport;
