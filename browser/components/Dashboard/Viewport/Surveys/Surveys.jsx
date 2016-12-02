import React from 'react';
import Survey from './Survey/SurveyContainer.js';
import './Surveys.scss';
import Table from './SurveySubcomponents/Table.jsx';

export default ({
  toggleForm,
  currentChannel,
}) => (
	<div id="surveys" >

    <div className="pt-navbar survey-navbar">
      <div className="pt-navbar-group pt-align-right">
        <button id='new-form-button' className='pt-button pt-intent-primary' onClick={toggleForm}>Create a New Survey</button>

        <div className="pt-input-group">
          <span className="pt-icon pt-icon-search"></span>
          <input id="survey_search_input" className="pt-input" type="search" placeholder="Search input" dir="auto" />
        </div>
      </div>

    </div>

    <div className="pt-card">
      <Table surveys={currentChannel.surveys}/>
    </div>


  </div>
);

//
// {currentChannel.surveys.length > 0 &&
// currentChannel.surveys.map((survey, idx) => (
//   <Survey
//     surveyId={survey.id}
//     key={idx}
//   />
// ))
// }