import React, { Component } from 'react';

import axios from 'axios';

class SurveyForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			channelId: this.props.channel,
			name: '',
			description: '',
			questions: []
		}
	}

	render() {
		return(
			<div id='surveyform' className='container-fluid'>
				<h3>Create a Survey for Your Channel{console.log(this.state)}</h3>

				<form onSubmit={this.submitForm}>

					<label className='pt-label'>Survey Name
					  <div className='pt-input-group'>
					    <input  className='pt-input' type='text' name='name' dir='auto' />
					  </div>
					</label>

					<label className='pt-label'>Survey Description
					  <div className='pt-input-group'>
					    <input  className='pt-input' type='text' name='description' dir='auto' />
					  </div>
					</label>

					{this.state.questions.map((question, i) => (
						<label className='pt-label' key={i + 1}>Question {i + 1}
						  <div className='pt-input-group'>
						    <input  className='pt-input' name={`question${i + 1}`} type='text' dir='auto' />
						  </div>

						  <div className='pt-select'>
						    <select name={`response${i + 1}`}>
						    	<option defaultValue='select'>Select a Response Type</option>
						      <option value='emoji'>Emoticons</option>
						      <option value='binary'>Binary</option>
						      <option value='slider'>Slider</option>
						      <option value='multiple_choice'>Multiple Choice</option>
						      <option value='text'>Text Box</option>
						    </select>
						  </div>
						 </label>
					))}

					<button type='button' className='pt-button pt-icon-add' onClick={this.newQuestion}>Add a Question</button>
					<button type='submit' className='pt-button pt-intent-success'>Submit</button>
				</form>

		  </div>
		)
	}

	newQuestion = () => {
		this.setState({
			questions: this.state.questions.concat('question')
		});
	};

	submitForm = (e) => {
		this.setState({
			name: e.target.name.value,
			description: e.target.description.value,
			questions: this.state.questions
			.map((question, i) => (
				e.target[`question${i + 1}`].value ?
					{
						text: e.target[`question${i + 1}`].value,
						type: e.target[`response${i + 1}`].value
					} :
					null
				))
			.filter(el => el !== null)
		}, () => {
			axios.post('/api/survey', this.state)
			.catch(err => console.error(err));
		});
	}

};

export default SurveyForm;