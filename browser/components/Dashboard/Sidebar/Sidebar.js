import React from 'react';
import { Link } from 'react-router';

export default () => (
	<div id='sidebar' className='container-fluid'>
	<h1>SIDEBAR</h1>
		<Link to='/overview'><h1>OVERVIEW</h1></Link>
		<Link to='/notifications'><h1>NOTIFICATIONS</h1></Link>
		<Link to='/surveys'><h1>SURVEYS</h1></Link>
		<Link to='/settings'><h1>SETTINGS</h1></Link>
  </div>
);