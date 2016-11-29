import React from 'react';
import Survey from './Survey/SurveyContainer.js';

export default ({
  toggleForm,
  currentChannel,
}) => (
	<div id="surveys" className="container-fluid">
		<h3>Surveys</h3>

    {currentChannel.surveys.length > 0 &&
     currentChannel.surveys.map((survey, idx) => (
       <Survey
           surveyId={survey.id}
           key={idx}
       />
     ))
    }

		<button className='pt-button' onClick={toggleForm}>Create a New Survey</button>
  </div>
);
