import React, { Component } from 'react';
import './NewSurveyForm.scss';

class SurveyForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			channelId: this.props.channel.id,
			name: '',
			description: '',
			questions: [],
			sample: 100
		};
	}

	render() {
		let responses = {};

		return(
			<div id='surveyform' className='container-fluid'>
				<h3>Create a Survey for {this.props.channel.name}</h3>

				<br />
				<form onSubmit={this.submitForm}>

					<label className='pt-label'>Survey Name
					  <div className='pt-input-group'>
					    <input  className='pt-input' type='text' name='name' />
					  </div>
					</label>

					<label className='pt-label'>Description
					  <div className='pt-input-group'>
					    <input className='pt-input' type='text' name='description' />
					  </div>
					</label>

					<hr />

					<label className='pt-label'>Sample Size (% of Channel Users)</label>
						<p>Leave blank to select all users from the channel, or enter a NUMBER to select that % of channel users as a random sample.</p>
					  <div className='pt-input-group'>
					    <input className='pt-input' type='text' name='sample' placeholder='%' />
					  </div>

					<br />

					{this.state.questions.map((question, i) => (
						<label className='pt-label' key={i + 1}>Question {i + 1}
						  <div className='pt-input-group'>
						    <input  className='pt-input' name={`question${i + 1}`} type='text' />
						  </div>

						  <div className='pt-select'>
						    <select name={`response${i + 1}`} onChange={() => console.log(i)} >
						    	<option defaultValue='select'>Select a Response Type</option>
						      <option value='emoji'>Emoticons</option>
						      <option value='binary'>Binary</option>
						      <option value='slider'>Slider</option>
						      <option value='multiple_choice'>Multiple Choice</option>
						      <option value='text'>Text Box</option>
						    </select>
						  </div>

						  <br />
						  <div>
						  	<input  className='pt-input' name={`responseOptions${i + 1}-A`} type='text' placeholder='Choice A' />
						    <input  className='pt-input' name={`responseOptions${i + 1}-B`} type='text' placeholder='Choice B' />
						    <input  className='pt-input' name={`responseOptions${i + 1}-C`} type='text' placeholder='Choice C' />
						    <input  className='pt-input' name={`responseOptions${i + 1}-D`} type='text' placeholder='Choice D' />
						  </div>

						  <br />
						  <div>
						  	<input  className='pt-input' name={`responseOptions${i + 1}-min`} type='text' placeholder='Minimum #' />
						    <input  className='pt-input' name={`responseOptions${i + 1}-max`} type='text' placeholder='Maximum #' />
						  </div>
						 </label>



					))}

					<hr />

					<div>
						<button type='button' className='pt-button pt-icon-add' onClick={this.newQuestion}>Add a Question</button>
						<button type='submit' className='pt-button pt-intent-success'>Submit</button>
					</div>
				</form>
				<br />
				<br />

		  </div>
		)
	}

	newQuestion = () => {
		this.setState({
			questions: this.state.questions.concat('question')
		});
	};

	responseFields = (e) => {

	};

	submitForm = (e) => {
		this.setState({
			name: e.target.name.value,
			description: e.target.description.value,
			sample: e.target.sample.value && typeof e.target.sample.value === 'number' ? e.target.sample.value : 100,
			questions: this.state.questions
			.map((question, i) => (
				e.target[`question${i + 1}`].value ?
					{
						text: e.target[`question${i + 1}`].value,
						type: e.target[`response${i + 1}`].value,
						responseOptions: {}
					} :
					null
				))
			.filter(el => el !== null)
		}, () => {
			this.props.submitSurvey(this.state)
		})
	};

};

export default SurveyForm;
