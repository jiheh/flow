import React, { Component, PropTypes } from 'react';

import ChannelsWidget from './ChannelsWidget.jsx'; // import dumb component

class ChannelsWidgetComponent extends Component {


  render() {
    const { invites, acceptAndDeleteInvite } = this.props;
    console.log("Jiheh Lee - Ritterling!")
    console.log(this.props)
    console.log(invites);
    return (
      <ChannelsWidget invites={invites} acceptAndDeleteInvite={acceptAndDeleteInvite} />
    );
  }
}

export default ChannelsWidgetComponent;
