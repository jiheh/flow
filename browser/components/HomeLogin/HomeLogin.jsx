import React, { Component, PropTypes } from 'react';


import '../Home.scss';
import LogInForm from '../Navbar/LogIn';

export default class HomeLogin extends Component {
  static propTypes = {
    loginAdmin: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  open = () => {
    this.setState({ showModal: true });
  }
  close = () => {
    this.setState({ showModal: false });
  }

  render() {
    const { loginAdmin } = this.props;

    return (
      <div>
        <button
          className="pt-button pt-fill"
          onClick={this.open}
        >
          Log in or Sign up
        </button>
        <LogInForm
          showModal={this.state.showModal}
          close={this.close}
          login={loginAdmin}
        />
      </div>
    );
  }
}
