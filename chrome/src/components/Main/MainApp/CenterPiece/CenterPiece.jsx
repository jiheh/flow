import React from 'react';
import Clock from './Clock/ClockComponent.jsx';
import Greeting from './Greeting/GreetingContainer.js';
import Survey from './Survey/SurveyContainer.js';
import './CenterPiece.scss';

const CenterPiece = () => (
  <div className="center-piece">
    <Clock />
    <Greeting />
    <Survey />
  </div>
);

export default CenterPiece;
