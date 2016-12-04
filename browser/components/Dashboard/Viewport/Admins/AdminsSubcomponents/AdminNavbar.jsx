import React from 'react';

import Admin from './AdminsSubcomponents.scss';

export default ({ newAdminFunction }) => (
  <div>
    <hr />
    <div className="admin-navbar">
      <div className="pt-input-group">
        <span className="pt-icon pt-icon-search"></span>
        <input className="pt-input" default type="search" placeholder="Search Admins" dir="auto"></input>
      </div>
      <button type="button"
              id="admin-add"
              className="pt-button pt-icon-add pt-intent-primary"
              onClick={() => newAdminFunction()}>
        Add Admin
      </button>
    </div>
  </div>
);