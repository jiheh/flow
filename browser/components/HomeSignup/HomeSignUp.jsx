import React from 'react';
import { browserHistory } from 'react-router';

import './HomeSignUp.scss';

class HomeSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			accountType:'basic',
			organizationType:'University',
			cardType:'visa'
		}
	}  

	render() {
		return (
			<div className="signin-container">
				<form onSubmit={this.submitForm}>

					<label className='pt-label'>Organization Name
					  <div className='pt-input-group'>
					    <input
					    	className='pt-input'
					    	type='text'
					    	name='organizationName'
					    	required
					    />
					  </div>
					</label>

					<label className='pt-label'>Organization Type
					  <div className='pt-select'>
					    <select
					    	name='orgType'
					    	onChange={this.changeOrganizationType}
					    	required
					    >
					      <option value='University'>University</option>
					      <option value='Business'>Business</option>
					      <option value='NGO'>NGO</option>
					    </select>
					  </div>
					</label>


					<label className='pt-label'>Address
					  <div className='pt-input-group'>
					    <input
					    	className='pt-input'
					    	type='text'
					    	name='address'
					    	required
					    />
					  </div>
					</label>

					<label className='pt-label'>Phone Number
					  <div className='pt-input-group'>
					    <input
					    	className='pt-input'
					    	type='text'
					    	name='phone'
					    	required
					    />
					  </div>
					</label>

					<hr />

					<label className='pt-label'>Account Type
					  <div className='pt-select'>
					    <select
					    	name='accountType'
					    	onChange={this.changeAccountType}
					    	required
					    >
					      <option value='basic'>Basic</option>
					      <option value='medium'>Medium</option>
					      <option value='pro'>Pro</option>
					    </select>
					  </div>
					 </label>

					{ this.state.accountType !== 'basic' ?
						<div>

							<label className='pt-label'>Credit Card Type
							  <div className='pt-select'>
							    <select
							    	name='cardType'
							    	onChange={this.changeOrganizationType}
							    	required
							    >
							    	<option value=''>Select a Card Type</option>
							      <option value='visa'>Visa</option>
							      <option value='mastercard'>Mastercard</option>
							      <option value='maestro'>Maestro</option>
							    </select>
							  </div>
							</label>

							<label className='pt-label'>Card Number
							  <div className='pt-input-group'>
							    <input
							    	className='pt-input'
							    	type='text'
							    	name='cardNumber'
							    	required
							    />
							  </div>
							</label>

							<label className='pt-label'>Expiry Date
							  <div className='pt-input-group'>
							    <input
							    	className='pt-input'
							    	type='text'
							    	name='expiryDate'
							    	required
							    />
							  </div>
							</label>

							<label className='pt-label'>Security Number
							  <div className='pt-input-group'>
							    <input
							    	className='pt-input'
							    	type='text'
							    	name='securityNumber'
							    	required
							    />
							  </div>
							</label>

						</div>
					:
						<div />
					}

					<hr />

					<label className='pt-label'>Admin Name
					  <div className='pt-input-group'>
					    <input
					    	className='pt-input'
					    	type='text'
					    	name='adminName'
					    	required
					    />
					  </div>
					</label>


					<label className='pt-label'>Admin Email
					  <div className='pt-input-group'>
					    <input
					    	className='pt-input'
					    	type='email'
					    	name='email'
					    	required
					    />
					  </div>
					</label>

					<label className='pt-label'>Admin Password
					  <div className='pt-input-group'>
					    <input
					    	className='pt-input'
					    	type='password'
					    	name='password'
					    	required
					    />
					  </div>
					</label>

					<button type='submit' className='pt-button pt-intent-success'>Submit</button>
				</form>
			</div>
		);
	}

	submitForm = (event) => { 
		event.preventDefault();
		let { createOrg } = this.props;

		let credentials = {
				organizationName:event.target.organizationName.value,
				adminName: event.target.adminName.value,
				accountType: this.state.accountType,
				organizationType: this.state.organizationType,
				address: event.target.address.value, 
				phone: event.target.phone.value,
				billing:{},
				email: event.target.email.value,
				password: event.target.password.value
			}

		if(this.state.accountType !== 'basic'){
			credentials.billing = {
					cardType:this.state.cardType,
					cardNumber:event.target.cardNumber.value,
					expiryDate:event.target.expiryDate.value,
					securityNumber:event.target.securityNumber.value
			}
		}
		createOrg(credentials);
	}

	changeOrganizationType = (event) => {
		this.setState({organizationType: event.target.value})
	} 

	changeAccountType = (event) => {
		this.setState({accountType: event.target.value})
	}
	
	changeCardType = (event) => {
		this.setState({cardType: event.target.value})
	}
};

export default HomeSignUp;
