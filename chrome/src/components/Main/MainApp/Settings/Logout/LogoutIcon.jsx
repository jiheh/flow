import React, { PropTypes } from 'react';
import logoutButton from './z-logout.png';
import '../Settings.scss';

const Logout = ({ logout, settings }) => (
  <div  className="setting sub-setting" 
        id="setting_toggle_audio"
        style={{backgroundImage: `url(${logoutButton})`}}
        onClick={logout}
        >
    <div className="setting-label">
    	<span className="setting-label-span">
    		Logout
    	</span>
    </div>
  </div>
);

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Logout;
