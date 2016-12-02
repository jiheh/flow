import React, { Component, PropTypes } from 'react';
import AddChannelPopover from './AddChannelPopover.jsx';

class AddChannelPopoverComponent extends Component {
  static propTypes = {
    submitChannel: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      showSpinner: false,
    };
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    const { submitChannel, toggle } = this.props;

    const newChannel = {
      name: evt.target.name.value,
      description: evt.target.description.value,
    };

    this.setState({ showSpinner: true }, () => {
      submitChannel(newChannel)
        .then(() => toggle())
        .catch(() => this.setState({ showSpinner: false }));
    });
  }

  render() {
    return (
      <AddChannelPopover
        showSpinner={this.state.showSpinner}
        onSubmit={this.onSubmit}
      />
    );
  }
}

export default AddChannelPopoverComponent;
