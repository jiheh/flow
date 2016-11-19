import React from 'react';
import { Link } from 'react-router';
import { connect } from'react-redux';
import _ from 'lodash';
import UserItem from './UserItem';

/* -----------------    COMPONENT     ------------------ */

class UserDetail extends React.Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	render() {
    let { user, currentUser } = this.props;
    if (!user) return <div></div>  // the user id is invalid or data isn't loaded yet
		return (
			<div className="container">
		 		<UserItem user={user}></UserItem>
			  <div className="panel panel-warning">
			    <div className="panel-heading">
	
			    </div>
			    <ul className="list-group">
          {
            currentUser && (currentUser.isAdmin || currentUser.id === user.id) ?
			      <form className="list-group-item story-item" onSubmit={this.onSubmit}>
			        <input 
			        	name="title"
			        	type="text"
              	className="form-like"
              	required
              	placeholder="Story Title"
            	/>
			        <button type="submit" className="btn btn-warning btn-xs">
			          <span className="glyphicon glyphicon-plus"></span>
			        </button>
			      </form>
            : null
          }
			    </ul>
			  </div>
			</div>
		);
	}

	onSubmit(event) {
		event.preventDefault()
		let { user } = this.props;
		event.target.title.value = "";
	}
}

/* -----------------    CONTAINER     ------------------ */

let mapState = ({ users, currentUser }, ownProps) => {
  let param_id = Number(ownProps.params.id);
  return { 
    user:    _.find(users, user => user.id === param_id), 
    currentUser
  }
}

let mapDispatch = {  }

export default connect(mapState, mapDispatch)(UserDetail);
