import React from 'react';

import SidebarContainer from './Sidebar/SidebarContainer';

export default ({ children }) => (
	<div id="dashboard" className="container-fluid">
	<h1>DASHBOARD</h1>
	  <SidebarContainer />
	  { children }
  </div>
);