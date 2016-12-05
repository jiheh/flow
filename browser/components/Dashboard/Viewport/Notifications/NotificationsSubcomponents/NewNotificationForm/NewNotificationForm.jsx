import React, { Component, PropTypes } from 'react';
import './NewNotificationForm.scss';
import { Popover, PopoverInteractionKind, Position } from '@blueprintjs/core';

class NotificationForm extends Component {
  static propTypes = {
    toggleNewNotificationForm: PropTypes.func.isRequired,
  }

	constructor(props) {
		super(props);

		this.state = {
			title: '',
			contents: '',
		};
	}

	render() {

		const { toggleNewNotificationForm } = this.props;

		const closeConfirmPopover = (
			<div>
				<h5>Are you sure you want to close?</h5>
				<p>Your changes will be discarded</p>
				<button className="pt-button pt-intent-danger pt-fill"
								onClick={() => this.props.toggleNewNotificationForm()}>
					Close
				</button>
			</div>
		)

		return(
			<div>
				<div className="pt-dialog-header">
					<span className="pt-icon-large pt-icon-clipboard"></span>
					<h5>Create New Notification</h5>

					<Popover content={closeConfirmPopover}
									 interactionKind={PopoverInteractionKind.CLICK}
									 position={Position.BOTTOM}
									 popoverClassName="pt-popover-content-sizing">
						<button aria-label="Close"
										className="pt-dialog-close-button pt-icon-small-cross"/>
					</Popover>

				</div>


				<div className="pt-dialog-body">
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
			this.props.toggleNewNotificationForm()
		})
	};

};

export default NotificationForm;




