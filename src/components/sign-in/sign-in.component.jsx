import React from 'react';
import './sign-in.styles.scss';
import { GoogleButton } from '../custom-button/custom-button.component';
import logo from '../../assets/icons/signinlogo.png';
import { connect } from 'react-redux';
import { googleSignInStart } from '../../redux/user/user.actions';

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
		const { googleSignInStart } = this.props;
		return (
			<div className='sign-in'>
				<div className='circle'>
					<img src={logo} alt='' />
				</div>
				<h3 className='title'>FillYuriy</h3>
				<h6 className='sub-title'>Please, sign in to order the TOP merch.</h6>
				<div className='buttons'>
					<GoogleButton onClick={googleSignInStart}>
						Sign In With Google
					</GoogleButton>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart())
});

export default connect(null, mapDispatchToProps)(SignIn);
