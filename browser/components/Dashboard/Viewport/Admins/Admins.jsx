import React from 'react';
import './Admins.scss'

import Admin from './AdminsSubcomponents/Admin.jsx';
import Navbar from './AdminsSubcomponents/AdminNavbar.jsx';

export default ({ toggleForm, currentChannel, isOrgHead }) => (
	<div id="admins" className="">
		<h3>Admins</h3>
		<Navbar newAdminFunction={toggleForm} isOrgHead={isOrgHead} />
		<div className="admin-grid">
					{
						(
							currentChannel.admins && currentChannel.admins.length > 0 && currentChannel.admins[0].UserInfo && currentChannel.admins.map((admin,idx) => (
								<Admin
									key={idx}
									adminName={admin.UserInfo.name}
									adminEmail={admin.UserInfo.email}
								/>
						))
						)
					}
		</div>

  </div>
);
