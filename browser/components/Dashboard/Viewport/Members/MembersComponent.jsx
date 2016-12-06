import React, { Component } from 'react';

import Members from './Members.jsx';
import NewMemberForm from './MembersSubcomponents/NewMemberForm.jsx';
import ExistingMemberEditor from './MembersSubcomponents/ExistingMemberEditor.jsx';

import {Dialog} from '@blueprintjs/core';

class MembersComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			showForm: false,
			dialogType: null,
			currentChannel: {},
			currentMemberId: -1,
			searchInput: ''
		}
	}


	// componentDidMount() {
	// 	if(Object.keys(this.props.currentChannel).length) this.props.receiveUsers(this.props.currentChannel.id)
	// }

	handleSearchInput = (evt) => {
    this.setState({ searchInput: evt.target.value });
  }

	toggleNewMemberForm = () => {
		this.setState({showForm: !this.state.showForm, dialogType: 'new_member'});
	}

	toggleExistingMemberEditor = (memberID) => {
		this.setState({currentMemberId: memberID});
		this.setState({showForm: !this.state.showForm, dialogType: 'existing_member'});
	}

	closeForm = () => {
		this.setState({showForm: false, dialogType: null});
	}

	checkNewChannel = () => {
		if(this.state.currentChannel.id !== this.props.currentChannel.id){
			this.props.receiveUsers(this.props.currentChannel.id)
			.then(() =>{
				this.setState({currentChannel: this.props.currentChannel})
			})
		}
	}

	render() {

		const { submitInvite, receiveUsers } = this.props;

		return (
			<div id="members_section">
				{this.checkNewChannel()}

				<nav className="pt-navbar">
			    <div className="pt-navbar-group pt-align-left">
			      <input className="pt-input" placeholder="Search members..." type="text" onInput={this.handleSearchInput} />
			    </div>

			    <div className="pt-navbar-group pt-align-right">
			      <button onClick={this.toggleNewMemberForm}className="pt-button pt-intent-primary pt-icon-plus">Add Member</button>
			    </div>
			  </nav>

				<Members toggleExistingMemberEditor={(userId) => this.toggleExistingMemberEditor(userId)}
								 currentChannel={this.state.currentChannel}
								 searchInput={this.state.searchInput} />

				<Dialog
							inline={false}
							isOpen={this.state.showForm}
							onClose={() => this.state.closeForm}>
					{
						this.state.dialogType === 'new_member'
							? <NewMemberForm
									channel={this.state.currentChannel}
									submitInvite={submitInvite}
									closeForm={this.closeForm}
									allChannelMembers={this.state.currentChannel.users}
									/>
							: <ExistingMemberEditor
									closeForm={this.closeForm}
									currentMemberId={this.state.currentMemberId}
									/>
					}
				</Dialog>


			</div>
		)
	}
};

export default MembersComponent;


{/*<AddMemberForm channel={this.state.currentChannel}*/}
							 {/*submitInvite={this.props.submitInvite}*/}
							 {/*toggleNewMemberForm={this.toggleNewMemberForm}/>*/}