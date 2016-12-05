import React, { Component } from 'react';
import { Menu, MenuItem, Popover, PopoverInteractionKind, Position } from '@blueprintjs/core';
import _ from 'lodash';

class AddMemberForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			channelId: this.props.channel.id,
			channelName: this.props.channel.name,
			currentEmail: '',
			suggestVisible: false,
			allMembersInChannel: this.props.allChannelMembers,
		};

	}

	handleEmailInputChange(e){
		const searchTerm = e.target.value;
			this.setState({currentEmail: searchTerm, suggestVisible: !!searchTerm})
	}

	setInput(member){
		this.setState({currentEmail: member.UserInfo.email, suggestVisible: false})
	}

	render() {

		const {channel, submitInvite, closeForm} = this.props;

		const autoSuggestMembers = () => {

			const searchTerm = this.state.currentEmail.toLowerCase();
			const allMembers = this.state.allMembersInChannel;
			const filteredMembers = _.filter(allMembers, (member) => {
				return 	member.UserInfo.name.toLowerCase().includes(searchTerm) ||
								member.UserInfo.email.toLowerCase().includes(searchTerm);
			})

			return (
					<Menu className="pt-minimal">
					{
						filteredMembers
							? filteredMembers.map((member, index) => (
								<li key={index}>
									<button type="button" className="pt-menu-item" onClick={() => this.setInput(member)}>
										{`${member.UserInfo.name} (${member.UserInfo.email})`}
									</button>
								</li>
								))
							: "none"

					}
					</Menu>
			)
		}


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
						<Popover
									isOpen={this.state.suggestVisible}
									content={autoSuggestMembers()}
									popoverClassName="pt-minimal"
									position={Position.BOTTOM_LEFT}
									inline={false}
									autoFocus={false}
									enforceFocus={false}
									>
							<label className='pt-label'>User E-mail
									<div className='pt-input-group'>
												<input  className='pt-input pt-fill'
																type='email'
																name='email'
																dir='auto'
																autoComplete="off"
																required
																value={this.state.currentEmail}
																onChange={(e) => this.handleEmailInputChange(e)}/>
									</div>
							</label>
						</Popover>

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
