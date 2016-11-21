import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const LogInForm = ({ showModal, close, login, signup }) => (
  <Modal show={showModal} onHide={close}>

    <Modal.Header closeButton>
      <Modal.Title>Log In</Modal.Title>
    </Modal.Header>
    
    <Modal.Body>
      <p>E-mail<input></input></p>
      <p>Password<input></input></p>
      <p><Button onClick={login}>Submit</Button></p>
    </Modal.Body>

    <Modal.Footer>
      <Button onClick={signup}>Create an Organization</Button>
    </Modal.Footer>

  </Modal>
);

export default LogInForm;