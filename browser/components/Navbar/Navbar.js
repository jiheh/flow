import React from 'react';
import { connect } from'react-redux';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Navigation = ({ currentUser, logoutAdmin }) => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to='/'>flow</Link>
      </Navbar.Brand>
    </Navbar.Header>

      <Nav pullRight>
        {currentUser ?
          (
            <span>
              <NavItem eventKey={1}><Link to='/signup'>Sign Up</Link></NavItem>
              <NavItem eventKey={2}>Log In</NavItem>
            </span>
          ) : (
           <NavItem eventKey={3} onClick={logoutAdmin}>Log Out</NavItem>
          )
        }
      </Nav>

  </Navbar>
);

export default Navigation;