import React, { Component } from 'react';

import Surveys from './Surveys';
import NewSurveyForm from './NewSurveyForm';

class SurveysComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			showForm: false
		}
	}

	toggleForm = () => {
		this.setState({showForm: `${!this.state.showForm}`});
	}

	render() {
		{console.log(this.props)}
		return (
			<div>
			{this.state.showForm === false ?
			 <Surveys
           toggleForm={this.toggleForm}
           currentChannel={this.props.currentChannel}
       /> :
				<NewSurveyForm channel={this.props.currentChannel} submitSurvey={this.props.submitSurvey} />
			}
			</div>
		)
	}
};

export default SurveysComponent;
