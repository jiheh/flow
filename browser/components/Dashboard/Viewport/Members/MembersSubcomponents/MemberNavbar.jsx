import React from 'react';

import Member from './MembersSubcomponents.scss';

export default ({ newMemberFunction }) => (
  <div className="member-navbar">
    <div className="pt-input-group">
      <span className="pt-icon pt-icon-search"></span>
      <input className="pt-input" default type="search" placeholder="Search Members" dir="auto"></input>
    </div>
    <button type="button"
            id="member-add"
            className="pt-button pt-icon-add pt-intent-primary"
            onClick={() => newMemberFunction()}>

      Add Member

    </button>
  </div>
);
