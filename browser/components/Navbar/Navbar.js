import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import LogInForm from './LogIn';

export default class Navigation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    }
  }

  open = () => {
    this.setState({showModal: true})
  }
  close = () => {
    this.setState({showModal: false})
  }
  
  render() {
    const { loginAdmin, logoutAdmin, currentAdmin } = this.props;
  
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>flow</Link>
          </Navbar.Brand>
        </Navbar.Header>

        {currentAdmin ?
          (
            <Nav pullRight>
              <NavItem eventKey={3} onClick={logoutAdmin}>Log Out</NavItem>
            </Nav>
          ) : (
            <Nav pullRight>
              <NavItem eventKey={1} onClick={this.open}>Log In</NavItem>
            </Nav>
          )
        }

        <LogInForm
          showModal={this.state.showModal}
          close={this.close}
          login={loginAdmin}
        />

      </Navbar>
    );
  }
}