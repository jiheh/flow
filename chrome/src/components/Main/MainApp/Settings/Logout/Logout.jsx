import React, { PropTypes } from 'react';
import logoutButton from './z-logout.png';

const Logout = ({ logout }) => (
  <span>
    <img
      src={logoutButton}
      className="settings-button"
      onClick={logout}
    />
  </span>
);

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Logout;
