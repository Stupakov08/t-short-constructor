import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Constructor from './pages/constructor/constructor.page';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.page';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import Admin from './pages/admin/admin';
import Orders from './pages/orders/orders';

class App extends React.Component {
	unsubscibeFromAuth = null;

	componentWillUnmount() {
		this.unsubscibeFromAuth();
	}

	render() {
		return (
			<div>
				<Switch>
					<Route
						exect
						path='/admin'
						render={() =>
							this.props.currentUser &&
							this.props.currentUser.moderator === true ? (
								<Admin></Admin>
							) : (
								<Redirect to='/' />
							)
						}
					/>
					<Route
						exact
						path='/orders'
						render={() =>
							this.props.currentUser ? <Orders /> : <Redirect to='/signin' />
						}
					/>
					<Route
						exact
						path='/'
						render={() =>
							this.props.currentUser ? (
								<Constructor />
							) : (
								<Redirect to='/signin' />
							)
						}
					/>
					<Route
						exact
						path='/signin'
						render={() =>
							this.props.currentUser ? (
								<Redirect to='/' />
							) : (
								<SignInAndSignUpPage />
							)
						}
					/>
					<Route render={() => <div>Not found</div>} />
				</Switch>
			</div>
		);
	}
}
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
