import React, { Component } from 'react';
import { Overlay } from '@blueprintjs/core';

import Surveys from './Surveys.jsx';

class SurveysComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			showModal: false,
			modalType: null, // "new_survey", "existing_survey"
			currentSurveyID: null,
			searchInput: ''
		};
	}

	handleSearchInput = (evt) => {
    this.setState({ searchInput: evt.target.value });
  }

	toggleNewSurveyForm = () => {
		this.setState({showModal: !this.state.showModal, modalType: "new_survey" });
	}

	toggleExistingSurveyEditor = (surveyID) => {
		this.setState({showModal: !this.state.showModal, modalType: "existing_survey", currentSurveyID: surveyID });
	}

	closeModal = () => {
		this.setState({showModal: false, modalType: null})
	}

	render() {

		const { currentChannel, submitSurvey } = this.props;

		return (
			<div>
				<div className="pt-navbar survey-navbar">
		      <div className="pt-navbar-group pt-align-left">
		        <input className="pt-input" placeholder="Search Surveys..." type="text" onInput={this.handleSearchInput} />
		      </div>

		      <div className="pt-navbar-group pt-align-right">
		        <button id='new-form-button' className='pt-button pt-intent-primary' onClick={this.toggleNewSurveyForm}>Create a New Survey</button>
		      </div>
		    </div>

				<Surveys
					toggleExistingSurveyEditor={this.toggleExistingSurveyEditor}
					currentChannel={currentChannel}
					modalType={this.state.modalType}
					showModal={this.state.showModal}
					submitSurvey={submitSurvey}
					currentSurveyID={this.state.currentSurveyID}
					searchInput={this.state.searchInput}
				/>
			</div>
		)
	}
};

export default SurveysComponent;


{/*<NewSurveyForm*/}
	{/*channel={this.props.currentChannel}*/}
	{/*submitSurvey={this.props.submitSurvey}*/}
	{/*toggleForm={this.toggleForm}*/}
{/*/>*/}