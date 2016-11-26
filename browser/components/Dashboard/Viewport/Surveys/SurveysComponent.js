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
		return (
			<div>
			{this.state.showForm === false ?
				<Surveys toggleForm={this.toggleForm} /> :
				<NewSurveyForm toggleForm={this.toggleForm} />
			}
			</div>
		)
	}
};

export default SurveysComponent;