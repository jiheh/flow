import React, { Component } from 'react';


class AddMemberForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			channelId: this.props.channel.id,
			channelName: this.props.channel.name,
		};
	}

	render() {

		return(
			<div id='addmemberform' className='container-fluid'>
				<h3>Add a member to {this.props.channel.name} {console.log(this.state)}</h3>

				<br />
				<form onSubmit={this.submitForm}>

					<label className='pt-label'>User E-mail
					  <div className='pt-input-group'>
					    <input  className='pt-input' type='email' name='email' dir='auto' />
					  </div>
					</label>

					<br />

					<hr />

					<div>
						<button type='submit' className='pt-button pt-intent-success'>Submit</button>
					</div>
				</form>

		  </div>
		)
	}

	submitForm = (e) => {
		this.setState({
			email: e.target.email.value,
		}, () => {
			this.props.submitInvite(this.state)
		})
	};

};

export default AddMemberForm;
