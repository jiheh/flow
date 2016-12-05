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
		};
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
				<Surveys
					toggleNewSurveyForm={this.toggleNewSurveyForm}
					toggleExistingSurveyEditor={this.toggleExistingSurveyEditor}
					currentChannel={currentChannel}
					modalType={this.state.modalType}
					showModal={this.state.showModal}
					submitSurvey={submitSurvey}
					currentSurveyID={this.state.currentSurveyID} />
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