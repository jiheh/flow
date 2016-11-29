import React, { Component } from 'react';

import Line from '../WidgetComponents/Line.jsx';
import '../Widgets.scss';
// import './ChannelsWidget.scss';

class ChannelsWidget extends Component {
  render() {
    const { invites, acceptAndDeleteInvite, currentChannels, showNewChannels } = this.props;


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
            return <div className="currentChannels" key={index}>{channel}</div>
          }) }
          { invites.length ? invites.map((invite, index) => {
            return <div className="channelInvitations" ref={index} key={index}>{invite.channelName} has invited you to its channel!<button onClick={() => {
                console.log(this.refs[index].className);
                this.refs[index].className = "channelInvitationsDisplayNone";
                console.log(this.refs[index].className);
                showNewChannels(currentChannels, invite);
                acceptAndDeleteInvite(invite);
              }}>Accept</button></div>
            }) : <div className="channelInvitations">You have no channel invitations at this time.</div> }
          </div>

        </div>
      );
  }
}

export default ChannelsWidget;
