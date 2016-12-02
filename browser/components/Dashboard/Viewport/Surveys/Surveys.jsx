import React from 'react';
import Survey from './Survey/SurveyContainer.js';
import './Surveys.scss';

export default ({
  toggleForm,
  currentChannel,
}) => (
	<div id="surveys" >
		<h3>Surveys</h3>
    <button id='new-form-button' className='pt-button pt-icon-add' onClick={toggleForm}>Create a New Survey</button>

    {currentChannel.surveys.length > 0 &&
     currentChannel.surveys.map((survey, idx) => (
       <Survey
           surveyId={survey.id}
           key={idx}
       />
     ))
    }
  </div>
);
