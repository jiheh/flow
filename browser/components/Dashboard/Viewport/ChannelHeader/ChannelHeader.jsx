import React from 'react';
import './ChannelHeader.scss';

export default ({currentChannel}) => (
  <div className="channel-header">
    <h5>{currentChannel.name}</h5>
    <h1>{currentChannel.description}</h1>

    <span className="pt-icon-standard pt-icon-people" ></span>
    <span className="mini-label">{currentChannel.numMembers}</span>

    <span className="pt-icon-standard pt-icon-document" ></span>
    <span className="mini-label">{currentChannel.surveys.length} Active Surveys</span>

  </div>
);