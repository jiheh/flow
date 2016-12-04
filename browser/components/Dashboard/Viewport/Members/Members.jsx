import React from 'react';
import './Members.scss'

import Member from './MembersSubcomponents/Member.jsx';

export default ({ toggleNewMemberForm, currentChannel }) => (
	<div id="members" className="">
		<nav className="pt-navbar">
			<div className="pt-navbar-group pt-align-left">
				<input className="pt-input" placeholder="Search members..." type="text" />
			</div>

			<div className="pt-navbar-group pt-align-right">
				<button onClick={() => toggleNewMemberForm() }className="pt-button pt-intent-primary pt-icon-plus">Add Member</button>
			</div>

		</nav>

		<div className="member-grid">
					{
						(
							currentChannel.users && currentChannel.users.length > 0 && currentChannel.users[0].UserInfo && currentChannel.users.map((user,idx) => (
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
