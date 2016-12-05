import React from 'react';
import './Members.scss'

import Member from './MembersSubcomponents/Member.jsx';
import Navbar from './MembersSubcomponents/MemberNavbar.jsx';

export default ({ toggleForm, currentChannel }) => (
	<div id="members">
		<h3>Members</h3>
		<button type="button"
            id="member-add"
            className="pt-button pt-icon-add pt-intent-primary"
            onClick={() => toggleForm()}>
      Add Member
    </button>
		<Navbar />
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
