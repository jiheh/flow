import React from 'react';
// import Survey from './Survey/SurveyContainer.js';
import './Surveys.scss';
import Table from './SurveySubcomponents/Table/Table.jsx';
import NewSurveyForm from './SurveySubcomponents/NewSurveyForm/NewSurveyForm.jsx'
import ExistingSurveyEditor from './SurveySubcomponents/ExistingSurveyEditor/ExistingSurveyEditor.jsx'

import '../Viewport.scss';

import { Dialog } from '@blueprintjs/core';

export default ({
  toggleExistingSurveyEditor,
  toggleNewSurveyForm,
  currentChannel,
  modalType,
  submitSurvey,
  currentSurveyID,
  showModal,
  searchInput
}) => (
	<div id="surveys" >
    <div className="pt-card">
      <Table surveys={currentChannel.surveys} toggleExistingSurveyEditor={toggleExistingSurveyEditor}
        searchInput={searchInput}
      />
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