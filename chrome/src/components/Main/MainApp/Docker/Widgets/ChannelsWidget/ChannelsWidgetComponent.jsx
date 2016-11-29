import React, { Component, PropTypes } from 'react';

import ChannelsWidget from './ChannelsWidget.jsx'; // import dumb component

class ChannelsWidgetComponent extends Component {


  render() {
    const { invites, acceptAndDeleteInvite, showNewChannels, currentChannels } = this.props;
    
    return (
      <ChannelsWidget
        invites={invites}
        acceptAndDeleteInvite={acceptAndDeleteInvite}
        showNewChannels={showNewChannels}
        currentChannels={currentChannels}
      />
    );
  }
}

export default ChannelsWidgetComponent;
