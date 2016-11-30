import React from 'react';

const Notifications = ({ notifications }) => (
  <div className="notifications">
  	<hr />
    {notifications.notifications.length > 0 && notifications.notifications.map((notification, idx) => (
    	<div key={idx}>
    		<br />
					<h4>{notification.title}</h4>
					<p>{notification.contents}</p>
      </div>
     ))}
  </div>
);



export default Notifications;
