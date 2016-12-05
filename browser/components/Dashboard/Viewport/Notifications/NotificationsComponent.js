import React, { Component, PropTypes } from 'react';
import Notifications from './Notifications.jsx';
import AddNotificationsForm from './AddNotificationsForm'

class NotificationsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldShowForm: false
    };
  }

  showForm = () => {
    this.setState({ shouldShowForm: true })
  }

  toggleForm = () => {
    this.setState({ shouldShowForm: !this.state.shouldShowForm})
  }


  render() {
    return (
      <div>
        {
          this.state.shouldShowForm ?
          <AddNotificationsForm channel={this.props.currentChannel} submitNotification={this.props.submitNotification} toggleForm={this.toggleForm}/>
           :
          <div>
            <h3>Notifications</h3>
            <button id='new-form-button' className='pt-button pt-icon-add pt-intent-primary' onClick={this.showForm}>Create a New Announcement</button>
            <Notifications notifications={this.props.currentChannel.announcements}/>
           </div>
        }
      </div>
    );
  }
}


export default NotificationsComponent;
     