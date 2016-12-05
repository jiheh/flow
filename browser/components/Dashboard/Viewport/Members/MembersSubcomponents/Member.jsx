import React from 'react';
import src from './person.png';

import './MembersSubcomponents.scss';

export default ({userId, userName, userEmail, toggleExistingMemberEditor}) => (

  <div className="member-card pt-card pt-elevation-0 pt-interactive"
        onClick={() => toggleExistingMemberEditor(userId)}>
    <div className="member-card-image">
      <img src={src} />
    </div>
    <div className="member-card-info">
      <h4>{userName}</h4>
      <p>{userEmail}</p>
    </div>
  </div>
)