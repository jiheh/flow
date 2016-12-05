import React,{ Component } from 'react';
import './ChannelList.scss';

import Channel from './ChannelItem/ChannelItem.jsx';

class ChannelList extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
     this.props.receiveChannels()
  }
  render() {
    let {channels,currentChannelID,setCurrentChannel,searchInput} = this.props
    return (
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
  }
}

export default ChannelList
