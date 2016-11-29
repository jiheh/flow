import React from 'react';

import SidebarContainer from './Sidebar/SidebarContainer.js';
import Viewport from './Viewport/ViewportContainer.js';
import './Dashboard.scss';

export default ({ children }) => (
	<div className="dashboard">
	  <SidebarContainer />
		<Viewport />

  </div>
);
