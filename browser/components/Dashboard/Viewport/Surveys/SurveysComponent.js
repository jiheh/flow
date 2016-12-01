import React, { Component } from 'react';

import Surveys from './Surveys.jsx';
import NewSurveyForm from './NewSurveyForm.jsx';

class SurveysComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			showForm: false,
		};
	}

	toggleForm = () => {
		this.setState({showForm: !this.state.showForm});
	}

	render() {
		return (
			<div>
			{!this.state.showForm ?
			 <Surveys
           toggleForm={this.toggleForm}
           currentChannel={this.props.currentChannel}
       /> :
			 <NewSurveyForm
           channel={this.props.currentChannel}
           submitSurvey={this.props.submitSurvey}
           toggleForm={this.toggleForm}
       />
			}
			</div>
		)
	}
};

export default SurveysComponent;
