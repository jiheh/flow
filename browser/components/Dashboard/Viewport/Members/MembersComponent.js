import React, { Component } from 'react';

import Members from './Members';
import AddMemberForm from './AddMemberForm';

class MembersComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			showForm: false
		}
	}

	toggleForm = () => {
		this.setState({showForm: `${!this.state.showForm}`});
	}

	render() {
		return (
			<div>
			{this.state.showForm === false ?
				<Members toggleForm={this.toggleForm} /> :
				<AddMemberForm channel={this.props.currentChannel} submitInvite={this.props.submitInvite} />
			}
			</div>
		)
	}
};

export default MembersComponent;
