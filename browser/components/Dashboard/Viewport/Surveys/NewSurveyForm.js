import React from 'react';
import { browserHistory } from 'react-router';
import { Button, DropdownButton, MenuItem } from 'react-bootstrap';

export default ({ toggleForm }) => (
	<div id='surveyform' className='container-fluid'>
		<h3>Create a Survey for Your Channel</h3>

		<form>

			<div className='form-group'>
				<label>Survey Name</label>
				<input name='name' className='form-control'></input>
			</div>
			<div className='form-group'>
				<label>Survey Description</label>
				<input name='description' className='form-control'></input>
			</div>

			<div className='form-group'>
				<label>Question 1</label>
				<input name='description' className='form-control'></input>
				<DropdownButton title='Select a Response Type' id='dropdown-basic-1' key='1'>
					<MenuItem eventKey='1'>Emoticons</MenuItem>
					<MenuItem eventKey='2'>Binary</MenuItem>
					<MenuItem eventKey='3'>Slider</MenuItem>
					<MenuItem eventKey='4'>Multiple Choice</MenuItem>
					<MenuItem eventKey='5'>Text Box</MenuItem>
				</DropdownButton>
			</div>

			<Button bsStyle='success' type='submit'>Submit</Button>
		</form>

  </div>
);