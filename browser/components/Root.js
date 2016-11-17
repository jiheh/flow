import React from 'react';
import Navbar from './Navbar';

export default ({ children }) => (
  <div id="main" className="container-fluid">
    <Navbar />
    { children }
  </div>
);