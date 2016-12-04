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

		const {channel, submitInvite, closeForm} = this.props;

		return(

			<div>
				<div className='pt-dialog-header'>
					<span className="pt-icon-large pt-icon-new-person"></span>
					<h5>Add a member to {this.props.channel.name}</h5>
					<button aria-label="Close"
									className="pt-dialog-close-button pt-icon-small-cross"
									onClick={() => closeForm()}></button>

				</div>

				<div className='pt-dialog-body'>

					<form onSubmit={this.submitForm}>

						<label className='pt-label'>User E-mail
							<div className='pt-input-group'>
								<input  className='pt-input' type='email' name='email' dir='auto' required/>
							</div>
						</label>

						<br />

						<hr />

						<div>
							<button type='submit' className='pt-button pt-intent-success'>Submit</button>
						</div>
					</form>

				</div>
			</div>
		)
	}

	submitForm = (e) => {
		e.preventDefault();
		this.setState({
			email: e.target.email.value,
		}, () => {
			this.props.submitInvite(this.state)
			.then(() => {
				this.props.closeForm()
			})
		})
	};

};

export default AddMemberForm;
