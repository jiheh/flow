import React from 'react';
import './ChannelList.scss';

import Channel from './ChannelItem/ChannelItem.jsx';

export default ({
  channels,
  currentChannelID,
  setCurrentChannel,
  searchInput,
}) => (
  <div className="channel-list">
    {
      channels.allChannels &&
      channels.allChannels
        .filter(channel => channel.name.toLowerCase().includes(searchInput)
          || channel.description.toLowerCase().includes(searchInput))
        .map((channel, index) => (
          <Channel
            key={index}
            channel={channel}
            currentChannelID={currentChannelID}
            setCurrentChannel={setCurrentChannel}
          />
        ))
    }
  </div>
);
