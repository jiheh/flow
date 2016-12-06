import React, { Component, PropTypes } from 'react';
import Notifications from './Notifications.jsx';
import AddNotificationsForm from './AddNotificationsForm';

class NotificationsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      modalType: '',
      currentNotificationID: null,
      searchInput: ''
    };
  }

  handleSearchInput = (evt) => {
    this.setState({ searchInput: evt.target.value });
  }

  closeForm = () => {
    this.setState({ showModal: false, modalType: '' })
  }

  toggleNewNotificationForm = () => {
    this.setState({ showModal: !this.state.showModal, modalType: 'new_notification'})
  }

  toggleExistingNotificationEditor = (notificationID) => {
    this.setState({ showModal: !this.state.showModal, modalType: 'existing_notification', currentNotificationID: notificationID})
  }


  render() {

    const { submitNotification } = this.props;

    return (
      <div>
        <div className="pt-navbar notifications-navbar">
          <div className="pt-navbar-group pt-align-left">
            <input className="pt-input" placeholder="Search Notifications..." type="text" onInput={this.handleSearchInput} />
          </div>

          <div className="pt-navbar-group pt-align-right">
            <button id='new-form-button' className='pt-button pt-intent-primary' onClick={() => this.toggleNewNotificationForm()}>Create a New Notification</button>
          </div>

        </div>

        {/* TODO: fix store to have notifications*/}

        <Notifications 
          showModal={this.state.showModal}
          toggleNewNotificationForm={this.toggleNewNotificationForm}
          currentNotificationID={this.state.currentNotificationID}
          toggleExistingNotificationEditor={this.toggleExistingNotificationEditor}
          submitNotification={submitNotification}
          modalType={this.state.modalType}
          currentChannelID={this.props.currentChannel.id}
          notifications={this.props.currentChannel.announcements}
          searchInput={this.state.searchInput}
        />
      </div>
    );
  }
}


export default NotificationsComponent;
     