import React from 'react';
import Clock from './Clock/ClockComponent.jsx';
import Greeting from './Greeting/GreetingContainer.js';
import Survey from './Survey/SurveyContainer.js';
import './CenterPiece.scss';

const CenterPiece = () => (
  <div className="center-piece">
    <div className="clockAndGreeting">
      <Clock />
      <Greeting />
    </div>
    <Survey className="survey" />
  </div>
);

export default CenterPiece;
