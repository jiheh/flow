import React from 'react';
import './SurveyResponseSection.scss';

import { } from '@blueprintjs/core';


export default ({ questions }) => (
  <div className="pt-card pt-fill">
    {questions && questions.map((question, index) => {
      console.log(question);

      return (
        <div className="pt-card" key={index}>
          <h4>{question.text}</h4>
          <span className="pt-tag pt-round">{question.type}</span>
        </div>
      )
    })}
  </div>
);
