import React from 'react';

import Member from './MembersSubcomponents.scss';

export default ({ newMemberFunction }) => (
  <nav className="pt-navbar">

    <button type="button"
            id="member-add"
            className="pt-button pt-icon-add pt-intent-primary"
            onClick={() => newMemberFunction()}>
      Add Member
    </button>

    <div className="pt-input-group">
      <span className="pt-icon pt-icon-search"></span>
      <input className="pt-input" default type="search" placeholder="Search Members" dir="auto"></input>
    </div>

  </nav>
);
