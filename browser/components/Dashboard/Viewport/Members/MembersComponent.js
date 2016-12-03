import React, { Component } from 'react';

import Members from './Members.jsx';
import AddMemberForm from './AddMemberForm';

class MembersComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			showForm: false,
			currentChannel: {}
		}
	}


	componentDidMount() {
		if(Object.keys(this.props.currentChannel).length) this.props.receiveUsers(this.props.currentChannel.id)
	}

	toggleForm = () => {
		this.setState({showForm: !this.state.showForm});
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
		return (
			<div>
			{
				this.checkNewChannel()
			}
			{
				!this.state.showForm ?
				<Members toggleForm={this.toggleForm} currentChannel={this.state.currentChannel} /> :
				<AddMemberForm channel={this.state.currentChannel} submitInvite={this.props.submitInvite} toggleForm={this.toggleForm}/>
			}
			</div>
		)
	}
};

export default MembersComponent;
