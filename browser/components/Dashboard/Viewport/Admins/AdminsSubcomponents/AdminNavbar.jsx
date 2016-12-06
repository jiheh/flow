import React from 'react';

import Admin from './AdminsSubcomponents.scss';

export default ({ newAdminFunction, isOrgHead }) => (
  <nav className="pt-navbar">
    <div className="pt-navbar-group pt-align-left">
      <input className="pt-input" placeholder="Search Admins..." type="text" />
    </div>

    <div className="pt-navbar-group pt-align-right">
      { isOrgHead ?
      <button
        onClick={() => newAdminFunction() }
        className="pt-button pt-icon-add pt-intent-primary"
      >Add Admin</button>
      : null }
    </div>

  </nav>
);
