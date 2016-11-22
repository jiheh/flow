import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Modal, Button } from 'react-bootstrap';

export default class LogInForm extends Component {

  constructor(props) {
    super(props);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { login } = this.props;
    const credentials = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    if (login) {
      login(credentials);
      this.props.close();
    }
  }

  signup = () => {
    browserHistory.push('/signup');
    this.props.close();
  }

  render() {
    const { showModal, close } = this.props;
  
    return (
      <Modal show={showModal} onHide={close}>

        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          <form onSubmit={this.onSubmit}>
            <div>
              <label>Email</label>
              <input
                name="email" 
                type="email"
              />
            </div>
            <div>
                <label>Password</label>
                <input 
                  name="password"
                  type="password"
                />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.signup}>Create an Organization</Button>
        </Modal.Footer>

      </Modal>
    );
  }
}
