import React from 'react';

export default ({channel, currentChannelID, setCurrentChannel}) => (
  <div className={channel.id === currentChannelID ? 'channel-item active' : 'channel-item'}
       onClick={()=> setCurrentChannel(channel)} >

    <h5>{channel.name}</h5>
    <p>{channel.description}</p>
    <span className="pt-icon-standard pt-icon-people" ></span>
    <span className="mini-label">{channel.numMembers}</span>
  </div>
);