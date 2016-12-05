import React, { Component, PropTypes } from 'react';
import { Popover, PopoverInteractionKind, Position } from '@blueprintjs/core';


import '../Home.scss';
import LogInForm from '../Navbar/LogIn';

export default class HomeLogin extends Component {
  static propTypes = {
    loginAdmin: PropTypes.func.isRequired,
  }

  render() {
    const { loginAdmin } = this.props;

    return (
      <Popover
        content={<LogInForm login={loginAdmin} />}
        interactionKind={PopoverInteractionKind.CLICK}
        popoverClassName="pt-popover-content-sizing"
        useSmartPositioning={false}
        position={Position.TOP_RIGHT}
        isModal={true}
      >
        <button
          className="pt-button pt-fill"
          onClick={this.open}
        >
          Log in or Sign up
        </button>
      </Popover>
    );
  }
}
