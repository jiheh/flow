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
    this.setState({
      shouldShowForm: true
    })
  }


  render() {
    return (
      <div>
        {
          this.state.shouldShowForm ?
          <AddNotificationsForm channel={this.props.currentChannel} submitNotification={this.props.submitNotification}/>
           :
          <div>
            <h3>Notifications</h3>
            <button id='new-form-button' className='xq-button' onClick={this.showForm}>Create a New Announcement</button>
            <Notifications notifications={this.props.currentChannel.announcements}/>
           </div>
        }
      </div>
    );
  }
}


export default NotificationsComponent;
     