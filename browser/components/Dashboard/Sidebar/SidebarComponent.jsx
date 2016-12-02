import React, { Component } from 'react';

import Sidebar from './Sidebar.jsx';

class SidebarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      showNewChannelPopover: false,
    };
  }

  handleSearchInput = (evt) => {
    this.setState({ searchInput: evt.target.value });
  }

  toggleNewChannelPopover = () => {
    this.setState({ showNewChannelPopover: !this.state.showNewChannelPopover });
  }

  render() {
    return (
      <Sidebar
        handleSearchInput={this.handleSearchInput}
        searchInput={this.state.searchInput}
        toggleNewChannelPopover={this.toggleNewChannelPopover}
        showNewChannelPopover={this.state.showNewChannelPopover}
      />
    );
  }
}

export default SidebarComponent;
