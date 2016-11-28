import React from 'react';

export default ({ toggleForm }) => (
	<div id="members" className="container-fluid">
		<h3>Members</h3>

    <button onClick={toggleForm}>Add New Member</button>
		<div>LIST EXISTING MEMBERS HERE</div>

  </div>
);
