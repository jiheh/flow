import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Modal, Button } from 'react-bootstrap';
import { Spinner } from '@blueprintjs/core';

export default class LogInForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loginSpinner: false,
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { login } = this.props;
    const credentials = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    if (login) {
      this.setState({ loginSpinner: true });
      login(credentials)
        .catch(() => {
          this.setState({ loginSpinner: false });
        })
      /* .then(() => {
       *   this.setState({ loginSpinner: false });
       *   this.props.close();
       * });*/
    }
  }

  signup = () => {
    browserHistory.push('/signup');
    this.props.close();
  }

  render() {
    const { showModal, close } = this.props;

    return (
      <div>
        <Modal show={showModal} onHide={close}>

          <Modal.Header closeButton>
            <Modal.Title>Log In</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input
                  name="email" 
                  type="email"
                  className="form-control"
                />
              </div>
              <div>
                  <label>Password</label>
                  <input 
                    name="password"
                    type="password"
                    className="form-control"
                  />
              </div>
              <br />

              {this.state.loginSpinner ? <Spinner />
              : <Button type="submit">Submit</Button>
              }
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.signup}>Create an Organization</Button>
          </Modal.Footer>

        </Modal>
      </div>
    );
  }
}
