import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import './Navbar.scss';


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

      <nav className='nav pt-navbar'>
        <div className='pt-navbar-group pt-align-left'>
            <div className='pt-navbar-heading' onClick={() => browserHistory.push('/')}>
              Flow Administrator
            </div>
        </div>
        <div className='pt-navbar-group pt-align-right'>
        <button className='pt-button pt-minimal' onClick={logoutAdmin}>Log Out</button>

        </div>
      </nav>
    );
  }
}


// <span className='pt-navbar-divider'></span>


