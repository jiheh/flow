import React from 'react';
import src from './person.png';

import './AdminsSubcomponents.scss';

export default ({userName, userEmail}) => (

  <div className="admin-card pt-card pt-elevation-0 pt-interactive">
    <div className="admin-card-image">
      <img src={src} />
    </div>
    <div className="admin-card-info">
      <h4>{userName}</h4>
      <p>{userEmail}</p>
    </div>
  </div>
)
