import React, { Component } from 'react';

import Members from './Members.jsx';
import NewMemberForm from './NewMemberForm.jsx';

import {Dialog} from '@blueprintjs/core';

class MembersComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			showForm: false,
			dialogType: null,
			currentChannel: {}
		}
	}


	componentDidMount() {
		if(Object.keys(this.props.currentChannel).length) this.props.receiveUsers(this.props.currentChannel.id)
	}

	toggleNewMemberForm = () => {
		this.setState({showForm: !this.state.showForm, dialogType: 'new_member'});
	}

	toggleExistingMemberEditor = (memberID) => {
		console.log("show existing member info");
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

				<Members toggleNewMemberForm={this.toggleNewMemberForm}
								 toggleExistingMemberEditor={this.toggleExistingMemberEditor}
								 currentChannel={this.state.currentChannel} />

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
									/>
							: null
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