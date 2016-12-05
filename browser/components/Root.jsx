import React from 'react';
import NavbarContainer from './Navbar/NavbarContainer';

export default ({ children, location }) => (
  <div id="main" className="" style={{height: '100%', width: '100%'}}>
    {location.pathname !== '/' && <NavbarContainer />}
    { children }
  </div>
);
