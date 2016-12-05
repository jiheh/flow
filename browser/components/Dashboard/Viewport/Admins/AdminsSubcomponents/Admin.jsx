import React from 'react';
import src from './person.png';

import './AdminsSubcomponents.scss';

export default ({adminName, adminEmail}) => (

  <div className="admin-card pt-card pt-elevation-0 pt-interactive">
    <div className="admin-card-image">
      <img src={src} />
    </div>
    <div className="admin-card-info">
      <h4>{adminName}</h4>
      <p>{adminEmail}</p>
    </div>
  </div>
)
