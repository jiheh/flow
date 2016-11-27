import React from 'react';

export default ({ toggleForm }) => (
	<div id="surveys" className="container-fluid">
		<h3>Surveys</h3>

		<div>LIST EXISTING SURVEYS HERE</div>

		<button onClick={toggleForm}>Create a New Survey</button>
  </div>
);