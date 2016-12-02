import React, { Component } from 'react';

class AddNotificationsForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			notificationName: '',
			notificationBody: '',
			channelId: this.props.channel.id,
		};
	}

	render() {

		return(
			<div id='addnotificationform' className='container-fluid'>
				<h3>Add a Notification to {this.props.channel.name}</h3>
				<br />
				<form onSubmit={this.submitForm2}>
					<label className='pt-label'>Notification Name
					  <div className='pt-input-group'>
					    <input  className='pt-input' type='text' name='notificationName' dir='auto' />
					  </div>
					</label>
					<label className='pt-label'>Notification Body
					  <div className='pt-input-group'>
					    <input  className='pt-input' type='text' name='notificationBody' dir='auto' />
					  </div>
					</label>
						<button type='submit' className='pt-button pt-intent-success'>Submit</button>
					<br />
					<hr />
				</form>
		  </div>
		)
	}

	submitForm2 = (e) => {
		e.preventDefault()
		let form = {
			channelIds:[this.state.channelId],
			title:e.target.notificationName.value,
			contents:e.target.notificationBody.value
		}
		this.props.submitNotification(form)
		.then(() => {
			this.props.toggleForm()
		})
	};


};

export default AddNotificationsForm;
