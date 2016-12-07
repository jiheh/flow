import React from 'react';
import './Admins.scss'

import Admin from './AdminsSubcomponents/Admin.jsx';
// import Navbar from './AdminsSubcomponents/AdminNavbar.jsx';

export default ({ currentChannel, searchInput }) => (
	<div id="admins" className="">
		<div className="admin-grid">
					{
						(
							currentChannel.admins && currentChannel.admins.length > 0 && currentChannel.admins[0].UserInfo && currentChannel.admins
							.filter(admin => admin.UserInfo.email.toLowerCase().includes(searchInput)
                || admin.UserInfo.name.toLowerCase().includes(searchInput))
							.map((admin,idx) => (
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
)

// <Navbar newAdminFunction={toggleForm} isOrgHead={isOrgHead} />