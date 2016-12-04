import React from 'react';
import './Admins.scss'

import Admin from './AdminsSubcomponents/Admin.jsx';
import Navbar from './AdminsSubcomponents/AdminNavbar.jsx';

export default ({ toggleForm, currentChannel }) => (
	<div id="admins" className="">
		<h3>Admins</h3>
		<Navbar newAdminFunction={toggleForm} />
		<div className="admin-grid">
					{
						(
							currentChannel.users && currentChannel.users.length > 0 && currentChannel.users[0].UserInfo && currentChannel.users.map((user,idx) => (
								<Admin
									key={idx}
									userName={user.UserInfo.name}
									userEmail={user.UserInfo.email}
								/>
						))
						)
					}
		</div>

  </div>
);
