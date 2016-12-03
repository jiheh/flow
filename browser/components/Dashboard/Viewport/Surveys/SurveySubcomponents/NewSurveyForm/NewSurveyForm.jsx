import React, { Component, PropTypes } from 'react';
import './NewSurveyForm.scss';
import { Popover, PopoverInteractionKind, Position } from '@blueprintjs/core';

class SurveyForm extends Component {
  static propTypes = {
    toggleNewSurveyForm: PropTypes.func.isRequired,
  }

	constructor(props) {
		super(props);

		this.state = {
			channelId: this.props.channel.id,
			name: '',
			description: '',
			questions: [],
			sample: 100,
			responses: {}
		};
	}

	render() {

		const { channel } = this.props;

		const closeConfirmPopover = (
			<div>
				<h5>Are you sure you want to close?</h5>
				<p>Your changes will be discarded</p>
				<button className="pt-button pt-intent-danger pt-fill"
								onClick={() => this.props.toggleNewSurveyForm()}>
					Close
				</button>
			</div>
		)

		return(
			<div>
				<div className="pt-dialog-header">
					<span className="pt-icon-large pt-icon-clipboard"></span>
					<h5>Create a Survey for {channel.name}</h5>

					<Popover content={closeConfirmPopover}
									 interactionKind={PopoverInteractionKind.CLICK}
									 position={Position.BOTTOM}
									 popoverClassName="pt-popover-content-sizing">
						<button aria-label="Close"
										className="pt-dialog-close-button pt-icon-small-cross"/>
					</Popover>

				</div>


				<div className="pt-dialog-body">

					<form onSubmit={this.submitForm}>

						<label className='pt-label'>Survey Name
							<div className='pt-input-group'>
								<input  className='pt-input' type='text' name='name' required />
							</div>
						</label>

						<label className='pt-label'>Description
							<div className='pt-input-group'>
								<input className='pt-input' type='text' name='description' required />
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
									<input  className='pt-input' name={`question${i + 1}`} type='text' required />
								</div>

								<div className='pt-select'>
									<select name={`response${i + 1}`} onChange={this.responseFields} required>
										<option value=''>Select a Response Type</option>
										<option value='emoji'>Emoticons</option>
										<option value='binary'>Binary</option>
										<option value='slider'>Slider</option>
										<option value='multiple_choice'>Multiple Choice</option>
										<option value='text'>Text Box</option>
									</select>
								</div>

								{this.state.responses[`response${i + 1}`] === 'multiple_choice' ?
									<div>
										<input className='pt-input' name={`responseOptions${i + 1}-0`} type='text' placeholder='Choice A' />
										<input className='pt-input' name={`responseOptions${i + 1}-1`} type='text' placeholder='Choice B' />
										<input className='pt-input' name={`responseOptions${i + 1}-2`} type='text' placeholder='Choice C' />
										<input className='pt-input' name={`responseOptions${i + 1}-3`} type='text' placeholder='Choice D' />
									</div> :
									<div></div>
								}

								{this.state.responses[`response${i + 1}`] === 'slider' ?
									<div>
										<input className='pt-input' name={`responseOptions${i + 1}-0`} type='text' placeholder='Minimum #' />
										<input className='pt-input' name={`responseOptions${i + 1}-1`} type='text' placeholder='Maximum #' />
									</div> :
									<div></div>
								}
							</label>
						))}

						<hr />

						<div>
							<button type='button' className='pt-button pt-icon-add' onClick={this.newQuestion}>Add a Question</button>
							<button type='submit' className='pt-button pt-intent-success'>Submit</button>
						</div>
					</form>

				</div>
			</div>
		)
	}

	newQuestion = () => {
		this.setState({
			questions: this.state.questions.concat('question')
		});
	};

	responseFields = (e) => {
		let targetName = e.target.name;
		let target = {};
		target[targetName] = e.target.value;

		this.setState({
			responses: Object.assign({}, this.state.responses, target)
		});
	};

	submitForm = (e) => {
		e.preventDefault();
		this.setState({
			name: e.target.name.value,
			description: e.target.description.value,
			sample: e.target.sample.value && typeof e.target.sample.value === 'number' ? e.target.sample.value : 100,
			questions: this.state.questions
				.map((question, i) => {

					let responseFields = [];
					for (let j = 0; j <= 3; j++) {
						if(e.target[`responseOptions${i + 1}-${j}`] && e.target[`responseOptions${i + 1}-${j}`].value) {
							responseFields.push(e.target[`responseOptions${i + 1}-${j}`].value);
						}
					}

					return (
						e.target[`question${i + 1}`].value ?
						{
							text: e.target[`question${i + 1}`].value,
							type: e.target[`response${i + 1}`].value,
							responseOptions: responseFields
						} :
							null
					)
				})
				.filter(el => el !== null)
		}, () => {
			this.props.submitSurvey(this.state)
				.then(() => {
					this.props.toggleNewSurveyForm();
				});
		})

	};

};

export default SurveyForm;




