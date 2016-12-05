import React from 'react';
// import Survey from './Survey/SurveyContainer.js';
import './Surveys.scss';
import Table from './SurveySubcomponents/Table/Table.jsx';
import NewSurveyForm from './SurveySubcomponents/NewSurveyForm/NewSurveyForm.jsx'
import ExistingSurveyEditor from './SurveySubcomponents/ExistingSurveyEditor/ExistingSurveyEditor.jsx'

import '../Viewport.scss';

import { Dialog } from '@blueprintjs/core';

export default ({
  toggleNewSurveyForm,
  toggleExistingSurveyEditor,
  currentChannel,
  modalType,
  submitSurvey,
  currentSurveyID,
  showModal,
}) => (
	<div id="surveys" >
    <div className="pt-navbar survey-navbar">
      <div className="pt-navbar-group pt-align-right">
        <button id='new-form-button' className='pt-button pt-intent-primary' onClick={() => toggleNewSurveyForm()}>Create a New Survey</button>

        <div className="pt-input-group">
          <span className="pt-icon pt-icon-search"></span>
          <input id="survey_search_input" className="pt-input" type="search" placeholder="Search input" dir="auto" />
        </div>
      </div>

    </div>

    <div className="pt-card">
      <Table surveys={currentChannel.surveys} toggleExistingSurveyEditor={toggleExistingSurveyEditor}/>
    </div>

    <Dialog
              style={{width:'80%', top:'10%', backgroundColor: 'white'}}
              isOpen={showModal}
              inline={false}
              autoFocus={true}
              canOutsideClickClose={false}
              canEscapeKeyClose={false}
              onClose={() => toggleNewSurveyForm()}>
        {
          modalType === 'new_survey'
            ? <NewSurveyForm
            toggleNewSurveyForm={toggleNewSurveyForm}
            currentChannel={currentChannel}
            submitSurvey={submitSurvey} />
            : null
        }
        {
          modalType === 'existing_survey'
            ? <ExistingSurveyEditor
                  currentChannel={currentChannel}
                  surveyID={currentSurveyID}
                  toggleExistingSurveyEditor={toggleExistingSurveyEditor}/>
            : null
        }

    </Dialog>

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