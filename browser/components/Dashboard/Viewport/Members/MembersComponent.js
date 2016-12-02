import React, { Component } from 'react';

import Members from './Members.jsx';
import AddMemberForm from './AddMemberForm';

class MembersComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			showForm: false
		}
	}

	componentDidMount() {
		if(Object.keys(this.props.currentChannel).length) this.props.receiveUsers(this.props.currentChannel.id)
	}

	toggleForm = () => {
		this.setState({showForm: !this.state.showForm});
	}

	render() {
		return (
			<div>
			{!this.state.showForm ?
				<Members toggleForm={this.toggleForm} currentChannel={this.props.currentChannel} /> :
				<AddMemberForm channel={this.props.currentChannel} submitInvite={this.props.submitInvite} toggleForm={this.toggleForm} />
			}
			</div>
		)
	}
};

export default MembersComponent;
