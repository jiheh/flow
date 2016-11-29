import React, { PropTypes } from 'react';
import Question from './Question/Question.jsx';

const Survey = ({ survey }) => (
  <div className="survey">

  	<hr />
    <h4>{survey.name}</h4>
    <p>{survey.description}</p>
    {survey.questions.length > 0 && survey.questions.map((question, idx) => (
    	<div key={idx}>
    		<br />
      	<Question question={question} index={idx + 1} key={idx}/>
      </div>
     ))}
  </div>
);

Survey.propTypes = {
  survey: PropTypes.object.isRequired,
};

export default Survey;
