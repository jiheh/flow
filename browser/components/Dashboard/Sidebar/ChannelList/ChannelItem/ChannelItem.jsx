import React from 'react';

export default ({id, name, description, numMembers, }) => (
  <div className="channel-item">
    <h5>{name}</h5>
    <p>{description}</p>
    <span className="pt-icon-standard pt-icon-people" ></span>
    <span className="mini-label">{numMembers}</span>
  </div>
);