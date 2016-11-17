import React from 'react';
import { connect } from'react-redux';
import { browserHistory } from 'react-router';
import { login, signup } from '../redux/auth';

/* -----------------    COMPONENT     ------------------ */

class Auth extends React.Component {
  constructor(props) {
    super(props);
    
    this.onSubmit = this.onSubmit.bind(this);
	}

	render() {
		const { message } = this.props;
		return (
			<div className="signin-container">
				<div className="buffer local">
						<form onSubmit={this.onSubmit}>
								<div className="form-group">
									<label>email</label>
									<input
										name="email" 
										type="email" 
										className="form-control" 
										required 
									/>
								</div>
								<div className="form-group">
										<label>password</label>
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
		const { message, login, signup } = this.props;
    const credentials = {
      email: event.target.email.value,
      password: event.target.password.value
    }
		if (login) {
			login(credentials);
		} else if (signup) {
			signup(credentials);
		} else {
			console.log(`${message} isn't implemented yet`);
		}
	}
}

/* -----------------    CONTAINER     ------------------ */

const mapStateLogin = () => ({ message: 'Log in' })
const mapDispatchLogin = dispatch => ({ 
	login: credentials => {
		dispatch(login(credentials));
		browserHistory.push('/');
	}
})

const mapStateSignup = () => ({ message: 'Sign up' })
const mapDispatchSignup = dispatch => ({ 
	signup: credentials => {
		dispatch(signup(credentials));
		browserHistory.push('/');
	}
})

export const Login = connect(mapStateLogin, mapDispatchLogin)(Auth);
export const Signup = connect(mapStateSignup, mapDispatchSignup)(Auth);
