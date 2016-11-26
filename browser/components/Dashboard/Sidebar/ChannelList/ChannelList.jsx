import React from 'react';
import './ChannelList.scss';

import Channel from './ChannelItem/channelItem.jsx';

export default ({channels, currentChannelID, setCurrentChannel}) => (
  <div className="channel-list">
    {
      channels.allChannels && channels.allChannels.map((channel, index)=> (
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