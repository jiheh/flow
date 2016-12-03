import React, { PropTypes } from 'react';
/* import { Link } from 'react-router';*/
import './Sidebar.scss';
import ChannelListContainer from './ChannelList/ChannelListContainer.js';
import { Popover, PopoverInteractionKind, Position } from '@blueprintjs/core';
import AddChannelPopover from './AddChannelPopover/AddChannelPopoverContainer.js';

const Sidebar = ({
  handleSearchInput,
  searchInput,
  toggleNewChannelPopover,
  showNewChannelPopover,
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
        <Popover
            content={<AddChannelPopover toggle={toggleNewChannelPopover} />}
            interactionKind={PopoverInteractionKind.CLICK}
            popoverClassName="pt-popover-content-sizing"
            useSmartPositioning={false}
            position={Position.RIGHT_TOP}
            isModal={false}
            isOpen={showNewChannelPopover}
        >
          <button
            className="pt-button pt-icon-plus pt-minimal"
            id="channel-button"
            onClick={() => toggleNewChannelPopover()}
          >
          </button>
        </Popover>
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
  toggleNewChannelPopover: PropTypes.func.isRequired,
  showNewChannelPopover: PropTypes.bool.isRequired,
};

export default Sidebar;
