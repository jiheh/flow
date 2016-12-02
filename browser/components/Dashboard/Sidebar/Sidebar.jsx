import React, { PropTypes } from 'react';
/* import { Link } from 'react-router';*/
import './Sidebar.scss';
import ChannelListContainer from './ChannelList/ChannelListContainer.js';

const Sidebar = ({
  handleSearchInput,
  searchInput,
}) => (
  <div className='sidebar'>
    <div className='sidebar-nav'>
      <div className='pt-input-group .modifier sidebar-nav-search'>
        <span className='pt-icon pt-icon-search search-icon' />
        <input
          className='pt-input'
          type='search'
          placeholder='Search channels...'
          id='channel_searchbox'
          onInput={handleSearchInput}
        />
        <button type='button' id='channel-button' className='pt-button pt-icon-plus pt-minimal'></button>
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
