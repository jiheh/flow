import React from 'react';
import { Link } from 'react-router';
import './Sidebar.scss';
import ChannelListContainer from './ChannelList/ChannelListContainer.js';

export default (channels) => (
	<div className='sidebar'>
		<div className='sidebar-nav'>
			<div className="pt-input-group .modifier sidebar-nav-search">
				<span className="pt-icon pt-icon-search search-icon"></span>
				<input className="pt-input" type="search" placeholder="Search channels..." id="channel_searchbox"/>
			</div>
		</div>

		<ChannelListContainer
		/>
	</div>
);


// 		<h1>SIDEBAR</h1>
// 		<Link to='/overview'><h1>OVERVIEW</h1></Link>
// 		<Link to='/notifications'><h1>NOTIFICATIONS</h1></Link>
// 		<Link to='/surveys'><h1>SURVEYS</h1></Link>
// 		<Link to='/settings'><h1>SETTINGS</h1></Link>