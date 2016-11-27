import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Button } from 'react-bootstrap';

import axios from 'axios';

class SurveyForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			channelId: this.props.channel,
			name: '',
			description: '',
			questionNumber: 1,
			questions: []
		}
	}

	submitForm = (e) => {
		let questionsArray = [];

		for (let i = 1; i <= this.state.questionNumber; i++) {
			console.log(e.target[`question${i}`].value)
			this.state.questions.push({
				text: `${e.target.question}${i}.value`
			})
		}

		this.setState({
			name: e.target.name.value,
			description: e.target.description.value,
			questions: questionsArray
		}, () => {
			axios.post('/api/survey', this.state)
			.catch(err => console.error(err));
		});
	}

	render() {
		return(

			<div id='surveyform' className='container-fluid'>
				<h3>Create a Survey for Your Channel{console.log(this.state)}</h3>

				<form onSubmit={this.submitForm}>

					<label className="pt-label">Survey Name
					  <div className="pt-input-group">
					    <input  className="pt-input" type="text" name="name" dir="auto" />
					  </div>
					</label>

					<label className="pt-label">Survey Description
					  <div className="pt-input-group">
					    <input  className="pt-input" type="text" name="description" dir="auto" />
					  </div>
					</label>

					<label className="pt-label">Question {this.state.questionNumber}
					  <div className="pt-input-group">
					    <input  className="pt-input" name={`question${this.state.questionNumber}`} type="text" dir="auto" />
					  </div>
					</label>

					<label className="pt-label">Select a Response Type
					  <div className="pt-select">
					    <select>
					      <option value="1">Emoticons</option>
					      <option value="2">Binary</option>
					      <option value="3">Slider</option>
					      <option value="4">Multiple Choice</option>
					      <option value="5">Text Box</option>
					    </select>
					  </div>
					</label>

					<Button bsStyle='success' type='submit'>Submit</Button>
				</form>

		  </div>
		)
	}
};

export default SurveyForm;