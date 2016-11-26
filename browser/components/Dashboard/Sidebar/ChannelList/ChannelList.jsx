import React from 'react';
import './ChannelList.scss';

import Channel from './ChannelItem/channelItem.jsx';

export default ({channels}) => (
  <div className="channel-list">
    {
      channels && channels.map(channel => (
        <Channel
          name={channel.name}
          numMembers={channel.numMembers}
          description={channel.description}
        />
        ))
    }
  </div>
);