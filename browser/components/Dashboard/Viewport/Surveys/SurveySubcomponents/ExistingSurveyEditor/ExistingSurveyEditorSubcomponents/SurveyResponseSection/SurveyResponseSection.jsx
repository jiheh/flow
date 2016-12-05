import React from 'react';
import './SurveyResponseSection.scss';

import Visualizer from './Question/QuestionData/QuestionData.jsx';

import { } from '@blueprintjs/core';


export default ({ frequency, currentChannelNumUsers, questions }) => (
  <div className="pt-card pt-fill">
    {questions && questions.map((question, index) => {
      return (
        <div className="pt-card" key={index}>
          <h4>{question.text}</h4>
          <span className="pt-tag pt-round">{question.type}</span>
          
          <Visualizer type={question.type} responses={question.responses} survey={question} />
        </div>
      )
    })}
  </div>
);
