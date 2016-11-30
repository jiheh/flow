import React, { Component, PropTypes } from 'react';
import Notifications from './Notifications.jsx';

class NotificationsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }
  componentDidMount() {
    if(Object.keys(this.props.currentChannel).length) this.props.receiveNotifications(this.props.currentChannel.id)
  }

  render() {
    return (
      <div>
        <h3>Notifications</h3>
        <button id='new-form-button' className='pt-button' onClick={() => console.log("*****")}>Create a New Announcement</button>
        <Notifications notifications={this.props.notifications}/>
      </div>
    );
  }
}


export default NotificationsComponent;
     