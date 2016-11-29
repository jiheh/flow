import React from 'react';
import { connect } from'react-redux';
import { browserHistory } from 'react-router';
import { login, signup } from '../reducers/auth';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

/* -----------------    COMPONENT     ------------------ */

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			accountType:'basic',
			organizationType:'University',
			cardType:'visa'
		}
    this.onSubmit = this.onSubmit.bind(this);
		this.changeAccountType = this.changeAccountType.bind(this)
		this.changeOrganizationType = this.changeOrganizationType.bind(this)
		this.changeCardType = this.changeCardType.bind(this)
	}  

	render() { 
		let { message } = this.props;
		return (
			<div className="signin-container">
				<div className="buffer local">
						<form onSubmit={this.onSubmit}>
								<div className="form-group">
									<label>Organization Name</label>
										<input
											name="organizationName" 
											type="organizationName" 
											className="form-control" 
											required 
										/>
										<FormGroup controlId="formControlsSelect"> 
											<ControlLabel>Organization Type</ControlLabel>
											<FormControl componentClass="select" placeholder="University" onChange={this.changeOrganizationType}>
												<option value="University" >University</option>
												<option value="Business">Business</option>
												<option value="NGO">NGO</option>
											</FormControl>
										</FormGroup>
									<label>Address</label>
										<input 
										  name="address"
											type="address" 
											className="form-control" 
											required 
										/>
									<label>Phone Number</label>
										<input 
										  name="phone"
											type="phone" 
											className="form-control" 
											required 
										/>
									<FormGroup controlId="formControlsSelect"> 
										<ControlLabel>Account Type</ControlLabel>
										<FormControl componentClass="select" placeholder="basic" onChange={this.changeAccountType}>
											<option value="basic" >basic</option>
											<option value="medium">medium</option>
											<option value="pro">pro</option>
										</FormControl>
									</FormGroup>
									{ this.state.accountType !== 'basic' ?

										<div>
											<FormGroup controlId="formControlsSelect"> 
												<ControlLabel>Card Type</ControlLabel>
												<FormControl componentClass="select" placeholder="visa" onChange={this.changeCardType}>
													<option value="visa">visa</option>
													<option value="mastercard">mastercard</option>
													<option value="maestro">maestro</option>
												</FormControl>
											</FormGroup>
											<label>Card Number</label>
												<input 
													name="cardNumber"
													type="cardNumber" 
													className="form-control" 
													required 
												/>
											<label>Expiry Date</label>
												<input 
													name="expiryDate"
													type="expiryDate" 
													className="form-control" 
													required 
												/>
											<label>Security Number</label>
											<input 
												name="securityNumber"
												type="securityNumber" 
												className="form-control" 
												required 
											/>
										</div>
										:
										<div/>
									}
									<label>Admin Name</label>
										<input 
										  name="adminName"
											type="adminName" 
											className="form-control" 
											required 
										/>
									<label>Admin Email</label>
										<input 
										  name="email"
											type="email" 
											className="form-control" 
											required 
										/>
									<label>Admin Password</label>
										<input 
										  name="password"
											type="password" 
											className="form-control" 
											required 
										/>
								</div>
								<button type="submit" className="btn btn-block btn-primary">{message}</button>
						</form>
				</div>
				<div className="or buffer">
					<div className="back-line">
						<span>OR</span>
					</div>
				</div>
				<div className="buffer oauth">
					<p>
						<a target="_self"
							 href="/auth/google"
							 className="btn btn-social btn-google">
						<i className="fa fa-google"></i>
						<span>{message} with Google</span>
						</a>
					</p>
				</div>
			</div>
		);
	}

	onSubmit(event) { 
		event.preventDefault();
		let { message, login, signup } = this.props;
		let self = this
		let credentials = {
				organizationName:event.target.organizationName.value,
				adminName: event.target.adminName.value,
				accountType: self.state.accountType,
				organizationType: self.state.organizationType,
				address: event.target.address.value, 
				phone: event.target.phone.value,
				billing:{
				},
				email: event.target.email.value,
				password: event.target.password.value
			}
		if(this.state.accountType !== 'basic'){
			credentials.billing = {
					cardType:self.state.cardType,
					cardNumber:event.target.cardNumber.value,
					expiryDate:event.target.expiryDate.value,
					securityNumber:event.target.securityNumber.value
			}
		}
		if (login) {
			login(credentials);
		} else if (signup) {
			signup(credentials);
		} else {
			console.log(`${message} isn't implemented yet`);
		}
	}

	changeOrganizationType(event) {
		this.setState({organizationType: event.target.value})
	} 

	changeAccountType(event) {
		this.setState({accountType: event.target.value})
	}
	
	changeCardType(event) {
		this.setState({cardType: event.target.value})
	}
}

/* -----------------    CONTAINER     ------------------ */

let mapStateLogin = () => ({ message: 'Log in' })
let mapDispatchLogin = dispatch => ({ 
	login: credentials => {
		dispatch(login(credentials));
		browserHistory.push('/');
	}
})

let mapStateSignup = () => ({ message: 'Sign up' })
let mapDispatchSignup = dispatch => ({ 
	signup: credentials => {
		dispatch(signup(credentials));
		browserHistory.push('/');
	}
})

export let Login = connect(mapStateLogin, mapDispatchLogin)(Auth);
export let Signup = connect(mapStateSignup, mapDispatchSignup)(Auth);
