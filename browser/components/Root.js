import React from 'react';
import NavbarContainer from './Navbar/NavbarContainer';

export default ({ children }) => (
  <div id="main" className="container-fluid">
    <NavbarContainer />
    { children }
  </div>
);