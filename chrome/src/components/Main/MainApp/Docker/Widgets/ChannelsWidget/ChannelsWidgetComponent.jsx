import React, { Component, PropTypes } from 'react';

import ChannelsWidget from './ChannelsWidget.jsx'; // import dumb component

class ChannelsWidgetComponent extends Component {


  render() {
    const { invites } = this.props;
    console.log("Jiheh Lee - Ritterling!")
    console.log(this.props)
    console.log(invites);
    return (
      <ChannelsWidget invites={invites} />
    );
  }
}

export default ChannelsWidgetComponent;
