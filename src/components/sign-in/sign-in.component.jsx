import React from 'react';
import './sign-in.styles.scss';
import { GoogleButton } from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import logo from '../../assets/icons/signinlogo.png';

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	}
	handleChange = e => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};
	render() {
		return (
			<div className='sign-in'>
				<div className="circle">
					<img src={logo} alt="" />
				</div>
				<h3 className="title">FillYuriy</h3>
				<h6 className="sub-title">Please, sign in to get pleasure.</h6>
				<div className='buttons'>
					<GoogleButton onClick={signInWithGoogle}>
						Sign In With Google
					</GoogleButton>
				</div>
			</div>
		);
	}
}

export default SignIn;
