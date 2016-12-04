import React, { Component } from 'react';

import Admins from './Admins.jsx';
import AddAdminForm from './AddAdminForm';

class AdminsComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			showForm: false,
			currentChannel: {}
		}
	}


	componentDidMount() {
		if (Object.keys(this.props.currentChannel).length) this.props.receiveAdmins(this.props.currentChannel.id)
		console.log("COMPONENT DID MOUNT")
		console.log(this.props.currentChannel)
	}

	toggleForm = () => {
		this.setState({showForm: !this.state.showForm});
	}

	checkNewChannel = () => {
		if(this.state.currentChannel.id !== this.props.currentChannel.id){
			this.props.receiveAdmins(this.props.currentChannel.id)
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
				<Admins toggleForm={this.toggleForm} currentChannel={this.state.currentChannel} /> :
				<AddAdminForm channel={this.state.currentChannel} submitInvite={this.props.submitInvite} toggleForm={this.toggleForm}/>
			}
			</div>
		)
	}
};

export default AdminsComponent;