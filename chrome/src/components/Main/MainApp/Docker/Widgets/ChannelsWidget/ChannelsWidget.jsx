import React from 'react';

import Line from '../WidgetComponents/Line.jsx';
import '../Widgets.scss';
// import './ChannelsWidget.scss';

const ChannelsWidget = ({
  invites,
}) => (
  <div className="channels-widget widget">

    <div className="widget-nav">
      <h4 className="widget-title">
        CHANNELS
      </h4>
    </div>

    <Line />

    <div className="widget-contents">
      {invites !== "" ? <div className="channelInvitations">{invites.channelName} has invited you to its channel!<button>Accept</button></div> :
        <div className="channelInvitations">You have no channel invitations at this time.</div>}
    </div>

  </div>
);

// MeditationWidget.propTypes = {
//   meditationWidget: propTypes,
// };

export default ChannelsWidget;
