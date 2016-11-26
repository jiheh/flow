import React from 'react';

import SidebarContainer from './Sidebar/SidebarContainer.js';
import Viewport from './Viewport/Viewport.jsx';
import './Dashboard.scss';

export default ({ children }) => (
	<div className="dashboard">
	  <SidebarContainer />
		<Viewport />

  </div>
);