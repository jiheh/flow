import React, { Component } from 'react';
import axios from 'axios';

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

	submitForm = (form) => {
		axios.post('/survey', form)
		.catch(err => console.error('Survey could not be created', err));
	}

	render() {
		return (
			<div>
			{this.state.showForm === false ?
				<Surveys toggleForm={this.toggleForm} /> :
				<NewSurveyForm channel={this.props.currentChannel.id} />
			}
			</div>
		)
	}
};

export default SurveysComponent;