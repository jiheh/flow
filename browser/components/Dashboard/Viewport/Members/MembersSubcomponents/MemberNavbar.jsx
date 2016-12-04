import React from 'react';

import Member from './MembersSubcomponents.scss';

export default ({ toggleNewMemberForm }) => (
  <nav className="pt-navbar">
    <div className="pt-navbar-group pt-align-left">
      <input className="pt-input" placeholder="Search members..." type="text" />
    </div>

    <div className="pt-navbar-group pt-align-right">
      <button onClick={() => toggleNewMemberForm() }className="pt-button pt-intent-primary pt-icon-plus">Add Member</button>
    </div>

  </nav>
);
