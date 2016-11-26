import React, { Component } from 'react';

import Sidebar from './Sidebar.jsx';

class SidebarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
    };
  }

  handleSearchInput = (evt) => {
    this.setState({ searchInput: evt.target.value });
  }

  render() {
    return (
      <Sidebar
        handleSearchInput={this.handleSearchInput}
        searchInput={this.state.searchInput}
      />
    );
  }
}

export default SidebarComponent;
