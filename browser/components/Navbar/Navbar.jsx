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

      <nav className="pt-navbar">
        <div className="pt-navbar-group pt-align-left">
          <Link to='/dashboard'>
            <div className="pt-navbar-heading">Flow Administrator</div>
          </Link>
        </div>
        <div className="pt-navbar-group pt-align-right">
          
          

          {currentAdmin ?
            (
              <button className="pt-button pt-minimal" onClick={logoutAdmin}>Log Out</button>
            ) : (
              <button className="pt-button pt-minimal" onClick={this.open}>Log In</button>
            )
          }    
          
        </div>

        <LogInForm
          showModal={this.state.showModal}
          close={this.close}
          login={loginAdmin}
        />

      </nav>



    );
  }
}


// <span className="pt-navbar-divider"></span>


