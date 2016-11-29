import React, { PropTypes } from 'react';
import Question from './Question/Question.jsx';

const Survey = ({ survey }) => (
  <div className="survey">
    <h1>{survey.name}</h1>
    <h3>{survey.description}</h3>
    {survey.questions.length > 0 && survey.questions.map((question, idx) => (
       <Question question={question} index={idx + 1} key={idx}/>
     ))}
  </div>
);

Survey.propTypes = {
  survey: PropTypes.object.isRequired,
};

export default Survey;
