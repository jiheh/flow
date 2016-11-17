import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from'react-redux';
import { addUser } from '../../redux/users';
import UserItem from './UserItem';

/* -----------------    COMPONENT     ------------------ */

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '', 
      email: '', 
      phone: '' 
    };

    this.filterUser = this.filterUser.bind(this);
    this.renderUserSearch = this.renderUserSearch.bind(this);
    this.renderNewUserWidget = this.renderNewUserWidget.bind(this);
    this.submit = this.submit.bind(this);
  }

  render() {
    return (
      <div className="container">
        <div className="user-query">
          { this.renderUserSearch() }
          { this.props.isAdmin ? this.renderNewUserWidget() : null }
        </div>
        <br />
        <br />
        <div className="user-list">
        { 
          this.props.users 
            .filter(this.filterUser)
            .map(user => <UserItem user={user} key={user.id} />)
        }
        </div>
      </div>
    );
  }

  renderUserSearch() {
    return (
      <div className="list-group-item min-content user-item">
        <div className="media">
          <div className="media-left media-middle icon-container">
            <span className="glyphicon glyphicon-search"></span>
          </div>
          <div className="media-body">
            <h4 className="media-heading tucked">
              <input 
                type="text"
                placeholder="Jean Doe"
                className="form-like" 
                onChange={e => this.setState({ name: e.target.value })}
              />
            </h4>
            <h5 className="tucked">
              <input
                 type="email"
                 placeholder="email@website.com"
                 className="form-like"
                 onChange={e => this.setState({ email: e.target.value })}
              />
            </h5>
            <h5 className="tucked">
              <input
                type="tel"
                placeholder="(555) 555-5555"
                className="form-like"
                onChange={e => this.setState({ phone: e.target.value })}
              />
            </h5>
          </div>
        </div>
      </div>  
    );
  }

  filterUser(story) {
    const nameMatch  = new RegExp(this.state.name, 'i');
    const emailMatch = new RegExp(this.state.email, 'i');
    const phoneMatch = new RegExp(this.state.phone, 'i');

    return nameMatch.test(story.name) 
        && emailMatch.test(story.email) 
        && phoneMatch.test(story.phone);
  }


  renderNewUserWidget() {
    return (
      <div className="list-group-item min-content user-item">
        <form className="media" onSubmit={this.submit}>
          <div className="media-left media-middle icon-container">
            <button 
              type="submit" 
              className="glyphicon glyphicon-plus clickable">
            </button>
          </div>
          <div className="media-body">
            <h4 className="media-heading tucked">
              <input 
                name="name"
                type="text"
                placeholder="Jean Doe"
                className="form-like"
              />
            </h4>
            <h5 className="tucked">
              <input
                name="email"
                type="email"
                required
                placeholder="email@website.com"
                className="form-like"
              />
            </h5>
            <h5 className="tucked">
              <input
                name="phone"
                type="tel"
                placeholder="(555) 555-5555"
                className="form-like"
              />
            </h5>
          </div>
        </form>
      </div>
    );
  }

  submit(event) {
    event.preventDefault();
    const user = {
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    }
    this.props.addUser(user);
    // clear the inputs
    event.target.name.value = ""
    event.target.email.value = ""
    event.target.phone.value = ""
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ users, currentUser }) => (
  { 
    isAdmin: currentUser && currentUser.isAdmin,
    users
  }
)

const mapDispatch = { addUser }

export default connect(mapState, mapDispatch)(UserList);

