import React from 'react';
import './Members.scss'
import Navbar from './MembersSubcomponents/MemberNavbar.jsx';

import Member from './MembersSubcomponents/Member.jsx';

export default ({ toggleNewMemberForm, toggleExistingMemberEditor, currentChannel }) => (
	<div id="members" className="">

		<Navbar toggleNewMemberForm={toggleNewMemberForm} />

		<div className="member-grid">
					{
						(
							currentChannel.users && currentChannel.users.length > 0 && currentChannel.users[0].UserInfo && currentChannel.users.map((user,idx) => (
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
