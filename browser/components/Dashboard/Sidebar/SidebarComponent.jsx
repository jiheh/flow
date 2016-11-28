import React, { Component, PropTypes } from 'react';

import Sidebar from './Sidebar.jsx';

class SidebarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      suggestions: [],
    };
  }

  onSuggestionsFetchRequested = ({ value }) => {
    console.log('fetch suggestions');
    console.log(value);
    console.log('new suggestions: ', this.getSuggestions(value));
    this.setState({
      suggestions: this.getSuggestions(value),
    });
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  }

  getSuggestionValue = (suggestion) => {
    return suggestion.name;
  }

  getSuggestions = (searchInput) => {
    const { allChannels } = this.props;
    const inputValue = searchInput.trim().toLowerCase();

    if (inputValue.length > 0) {
      return allChannels.filter((channel) => {
        return channel.name.toLowerCase().includes(inputValue) ||
              channel.description.toLowerCase().includes(inputValue);
      });
    } else {
      return [];
    }
  }

  shouldRenderSuggestions = (value) => {
    return value.trim().length > 2;
  }

  handleSearchChange = (evt, { newValue }) => {
    this.setState({
      searchInput: newValue,
    });
  }

  renderSuggestion = suggestion => (
    <div>
      {suggestion.name}
    </div>
  )

  renderInputComponent = inputProps => (
    <div className="input-container">
      <input {...inputProps} />
      <button
        className="clear-input"
        onClick={this.clearInput}
      >
        x
      </button>
    </div>
  )

  clearInput = () => {
    this.setState({
      searchInput: '',
      suggestions: [],
    });
  }

  render() {
    return (
      <Sidebar
        handleSearchChange={this.handleSearchChange}
        searchInput={this.state.searchInput}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        allChannels={this.props.allChannels}
        suggestions={this.state.suggestions}
        shouldRenderSuggestions={this.shouldRenderSuggestions}
        renderInputComponent={this.renderInputComponent}
      />
    );
  }
}

SidebarComponent.propTypes = {
  allChannels: PropTypes.array,
};

export default SidebarComponent;
