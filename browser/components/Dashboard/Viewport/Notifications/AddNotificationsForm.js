import React, { Component } from 'react';

class AddNotificationsForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
      notifications:[],
			channelId: this.props.channel.id,
		};
	}

	render() {

		return(
			<div id='addnotificationform' className='container-fluid'>
				<h3>Add Notifications to {this.props.channel.name}</h3>

				<br />
				<form onSubmit={this.submitForm}>
					<label className='pt-label'>Notification Name
					  <div className='pt-input-group'>
					    <input  className='pt-input' type='notificationName' name='notificationName' dir='auto' />
					  </div>
					</label>
					<label className='pt-label'>Notification Body
					  <div className='pt-input-group'>
					    <input  className='pt-input' type='notificationBody' name='notificationBody' dir='auto' />
					  </div>
					</label>

					<br />

					<hr />

					<div>
						<button type='button' className='pt-button pt-icon-add' onClick={this.newQuestion}>Add a Notification</button>
						<button type='submit' className='pt-button pt-intent-success'>Submit</button>
					</div>
				</form>

		  </div>
		)
	}

  addAnnouncement (){

  }

  response (){
    
  }


	submitForm = (e) => {
		
	};


};

export default AddNotificationsForm;
