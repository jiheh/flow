import React from 'react';
import './Members.scss'

import Member from './MembersSubcomponents/Member.jsx';
import Navbar from './MembersSubcomponents/MemberNavbar.jsx';

export default ({ toggleForm, currentChannel }) => (
	<div id="members" className="">
		<Navbar newMemberFunction={toggleForm} />
		<div className="member-grid">
					{
						(
							currentChannel.users && currentChannel.users[0].UserInfo && currentChannel.users.map((user,idx) => (
								<Member
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
