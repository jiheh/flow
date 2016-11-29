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
          { console.log("HARAMBE") }
          { console.log(currentChannels) }
          { currentChannels && currentChannels.map((channel, index) => {
            return <div className="currentChannels" key={index}><img className="cross" src={cross} onClick={() => {
                leaveChannel(channel[1]);
              }} />{channel[0]}</div>
          }) }
          { invites.length ? invites.map((invite, index) => {
            return <div className="channelInvitations" ref={index} key={index}><img className="check" src={check} onClick={() => {
                console.log("EYYY HABIBI")
                console.log(this.refs[index].className);
                this.refs[index].className = "channelInvitationsDisplayNone";
                console.log(this.refs[index].className);
                showNewChannels(currentChannels, invite);
                acceptAndDeleteInvite(invite);
              }} />{invite.channelName} (pending)</div>
          }) : null }
          </div>

        </div>
      );
  }



}


// MeditationWidget.propTypes = {
//   meditationWidget: propTypes,
// };

export default ChannelsWidget;


//
// const ChannelsWidget = ({
//   invites,
//   acceptAndDeleteInvite,
//   currentChannels,
//   showNewChannels,
// }) => (
//   <div className="channels-widget widget">
//
//     <div className="widget-nav">
//       <h4 className="widget-title">
//         CHANNELS
//       </h4>
//     </div>
//
//     <Line />
//
//     <div className="widget-contents">
//       { console.log("HARAMBE") }
//       { console.log(currentChannels) }
//       { currentChannels && currentChannels.map((channel, index) => {
//         return <div className="currentChannels" key={index}>{channel}</div>
//       }) }
//       { invites.length ? invites.map((invite, index) => {
//         return <div className="channelInvitations" ref={index} key={index}>{invite.channelName} has invited you to its channel!<button onClick={() => {
//             console.log("EYYY HABIBI")
//             console.log(this.refs);
//             showNewChannels(currentChannels, invite);
//             acceptAndDeleteInvite(invite);
//           }}>Accept</button></div>
//         }) : <div className="channelInvitations">You have no channel invitations at this time.</div> }
//       </div>
//
//     </div>
//   );
