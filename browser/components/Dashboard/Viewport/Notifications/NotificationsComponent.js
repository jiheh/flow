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
  componentDidMount() {
    console.log(this.props.notifications)
    if(Object.keys(this.props.currentChannel).length) this.props.receiveNotifications(this.props.currentChannel.id)
  }

  showForm = () => {
    this.setState({
      shouldShowForm: true
    })
  }


  render() {
    return (
      <div>
      {console.log(this.state)}
        {
          this.state.shouldShowForm ?
          <AddNotificationsForm channel={this.props.currentChannel}/>
           :
          <div>
            <h3>Notifications</h3>
            <button id='new-form-button' className='xq-button' onClick={this.showForm}>Create a New Announcement</button>
            <Notifications notifications={this.props.notifications}/>
           </div>
          
        }
      </div>
    );
  }
}


export default NotificationsComponent;
     