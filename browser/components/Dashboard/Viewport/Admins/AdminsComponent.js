import React, { Component } from 'react';

import Admins from './Admins.jsx';
import AddAdminForm from './AddAdminForm';

class AdminsComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			showForm: false,
			currentChannel: {},
			searchInput: ''
		}
	}

	// componentDidMount() {
	// 	if (Object.keys(this.props.currentChannel).length) this.props.receiveAdmins(this.props.currentChannel.id)
	// }

	handleSearchInput = (evt) => {
    this.setState({ searchInput: evt.target.value });
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

		  <nav className="pt-navbar">
		    <div className="pt-navbar-group pt-align-left">
		      <input className="pt-input" placeholder="Search Admins..." type="text" onInput={this.handleSearchInput} />
		    </div>

		    <div className="pt-navbar-group pt-align-right">
		      { this.props.isOrgHead ?
		      <button
		        onClick={this.toggleForm}
		        className="pt-button pt-icon-add pt-intent-primary"
		      >Add Admin</button>
		      : null }
		    </div>
		  </nav>

			{
				!this.state.showForm ?
				<Admins currentChannel={this.props.currentChannel} searchInput={this.state.searchInput} /> :
				<AddAdminForm channel={this.props.currentChannel} submitInvite={this.props.submitInvite} toggleForm={this.toggleForm}/>
			}
			</div>
		)
	}
};

export default AdminsComponent
