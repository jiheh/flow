import React, { PropTypes } from 'react';
/* import { Link } from 'react-router';*/
import './Sidebar.scss';
import ChannelListContainer from './ChannelList/ChannelListContainer.js';

const Sidebar = ({
  handleSearchInput,
  searchInput,
}) => (
  <div className="sidebar">
    <div className="sidebar-nav">
      <div className="pt-input-group .modifier sidebar-nav-search">
        <span className="pt-icon pt-icon-search search-icon" />
        <input
          className="pt-input"
          type="search"
          placeholder="Search channels..."
          id="channel_searchbox"
          onInput={handleSearchInput}
        />
      </div>
    </div>
    <ChannelListContainer
      searchInput={searchInput.toLowerCase()}
    />
  </div>
);

Sidebar.propTypes = {
  handleSearchInput: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired,
};

export default Sidebar;

// 		<h1>SIDEBAR</h1>
// 		<Link to='/overview'><h1>OVERVIEW</h1></Link>
// 		<Link to='/notifications'><h1>NOTIFICATIONS</h1></Link>
// 		<Link to='/surveys'><h1>SURVEYS</h1></Link>
// 		<Link to='/settings'><h1>SETTINGS</h1></Link>
