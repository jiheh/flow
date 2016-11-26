import React from 'react';
import NavbarContainer from './Navbar/NavbarContainer';

export default ({ children }) => (
  <div id="main" className="" style={{height: '100vh'}}>
    <NavbarContainer />
    { children }
  </div>
);