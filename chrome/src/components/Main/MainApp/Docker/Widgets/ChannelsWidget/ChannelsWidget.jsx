import React from 'react';

import Line from '../WidgetComponents/Line.jsx';
import '../Widgets.scss';
// import './ChannelsWidget.scss';

const ChannelsWidget = ({
  invites,
  acceptAndDeleteInvite,
}) => (
  <div className="channels-widget widget">

    <div className="widget-nav">
      <h4 className="widget-title">
        CHANNELS
      </h4>
    </div>

    <Line />

    <div className="widget-contents">
      { invites.length ? invites.map((invite) => {
        return <div className="channelInvitations">{invite.channelName} has invited you to its channel!<button onClick={() => acceptAndDeleteInvite()}>Accept</button></div>
      }) : <div className="channelInvitations">You have no channel invitations at this time.</div> }
    </div>

  </div>
);

// MeditationWidget.propTypes = {
//   meditationWidget: propTypes,
// };

export default ChannelsWidget;
