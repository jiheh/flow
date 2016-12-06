import React from 'react';

const Organization = ({ organization }) => (
  <div className="notifications">
    <hr />
			<h4>{`This channel belongs to the ${organization.name} Organization.`}</h4>
			<p>Use the buttons above to create and track surveys, to create and view announcements, to invite members, and to add admins to your channel.</p>
  </div>
);



export default Organization;
