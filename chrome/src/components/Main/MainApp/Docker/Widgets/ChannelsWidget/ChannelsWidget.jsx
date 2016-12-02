import React, { Component } from 'react';

import Line from '../WidgetComponents/Line.jsx';
import '../Widgets.scss';
import check from './check.png';
import cross from './cross.png';
// import './ChannelsWidget.scss';

class ChannelsWidget extends Component {
  render() {
    const { invites, acceptAndDeleteInvite, currentChannels, showNewChannels, leaveChannel } = this.props;


    return (
      <div className="channels-widget widget">

        <div className="widget-nav">
          <h4 className="widget-title">
            CHANNELS
          </h4>
        </div>

        <Line />

        <div className="widget-contents">
          { currentChannels && currentChannels.map((channel, index) => {
            return <div className="currentChannels" key={index}><img className="cross" src={cross} onClick={() => {
                leaveChannel(channel[1]);
              }} />{channel[0]}</div>
          }) }
          { invites.length ? invites.map((invite, index) => {
            return <div className="channelInvitations" ref={index} key={index}><img className="check" src={check} onClick={() => {
                showNewChannels(currentChannels, invite);
                acceptAndDeleteInvite(invite);
              }} />{invite.channelName} (pending)</div>
            }) : null }
          </div>

        </div>
      );
  }
}

export default ChannelsWidget;
