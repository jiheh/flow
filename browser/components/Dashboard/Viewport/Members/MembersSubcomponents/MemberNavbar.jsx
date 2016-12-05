import React from 'react';

import Member from './MembersSubcomponents.scss';

export default () => (
  <div>
    <hr />
    <div className="member-navbar">
      <div className="pt-input-group">
        <span className="pt-icon pt-icon-search"></span>
        <input className="pt-input" default type="search" placeholder="Search Members" dir="auto"></input>
      </div>
    </div>
  </div>
);
