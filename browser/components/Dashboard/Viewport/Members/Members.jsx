import React from 'react';
import './Members.scss'
// import Navbar from './MembersSubcomponents/MemberNavbar.jsx';

import Member from './MembersSubcomponents/Member.jsx';

export default ({ toggleNewMemberForm, toggleExistingMemberEditor, currentChannel, searchInput }) => (
	<div id="members" className="">
		
		<div className="member-grid">
					{
						(
							currentChannel.users && currentChannel.users.length > 0 && currentChannel.users[0].UserInfo && currentChannel.users
							.filter(user => user.UserInfo.email.toLowerCase().includes(searchInput)
                    || user.UserInfo.name.toLowerCase().includes(searchInput))
							.map((user,idx) => (
								<Member
									toggleExistingMemberEditor={(userId) => toggleExistingMemberEditor(userId)}
									key={idx}
									userId={user.UserInfo.id}
									userName={user.UserInfo.name}
									userEmail={user.UserInfo.email}
								/>
						))
						)
					}
		</div>

  </div>
);

// <Navbar toggleNewMemberForm={toggleNewMemberForm} />