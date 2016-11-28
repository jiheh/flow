import React, { PropTypes } from 'react';
/* import { Link } from 'react-router';*/
import './Sidebar.scss';
import ChannelListContainer from './ChannelList/ChannelListContainer.js';
import Autosuggest from 'react-autosuggest';

const Sidebar = ({
  /* handleSearchInput,*/
  handleSearchChange,
  searchInput,
  onSuggestionsFetchRequested,
  onSuggestionsClearRequested,
  getSuggestionValue,
  renderSuggestion,
  suggestions,
  shouldRenderSuggestions,
  renderInputComponent,
}) => (
  <div className="sidebar">
    <div className="sidebar-nav">
      <div className="pt-input-group .modifier sidebar-nav-search">
        <span className="pt-icon pt-icon-search search-icon" />
        <Autosuggest
          inputProps={{
            className: 'pt-input',
            type: 'search',
            placeholder: 'Search channels...',
            id: 'channel_searchbox',
            onChange: handleSearchChange,
            value: searchInput,
          }}
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          shouldRenderSuggestions={shouldRenderSuggestions}
          renderInputComponent={renderInputComponent}
        />
      </div>
    </div>
    <ChannelListContainer
      searchInput={searchInput.toLowerCase()}
    />
  </div>
);

Sidebar.propTypes = {
  /* handleSearchInput: PropTypes.func.isRequired,*/
  handleSearchChange: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired,
  onSuggestionsFetchRequested: PropTypes.func.isRequired,
  onSuggestionsClearRequested: PropTypes.func.isRequired,
  getSuggestionValue: PropTypes.func.isRequired,
  renderSuggestion: PropTypes.func.isRequired,
  suggestions: PropTypes.array.isRequired,
  shouldRenderSuggestions: PropTypes.func.isRequired,
  renderInputComponent: PropTypes.func.isRequired,
};

export default Sidebar;
