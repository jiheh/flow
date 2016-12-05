import React, { PropTypes } from 'react';
import Question from '../SurveySubcomponents/ExistingSurveyEditor/ExistingSurveyEditorSubcomponents/SurveyResponseSection/Question/Question.jsx';
import './Survey.scss';

const Survey = ({ survey }) => (
  <div className="survey">

  	<hr />
    <h4>{survey.name}</h4>
    <p>{survey.description}</p>
    <div className="questions-flex">
    {survey.questions.length > 0 && survey.questions.map((question, idx) => (
    	<div key={idx}>
    		<br />
          <Question question={question} index={idx + 1} key={idx} survey={survey}/>
      </div>
     ))}
    </div>
  </div>
);

Survey.propTypes = {
  survey: PropTypes.object.isRequired,
};

export default Survey;
