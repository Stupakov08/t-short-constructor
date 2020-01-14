import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Constructor from './pages/constructor/constructor.page';
// import ShopPage from './pages/shop/shop.components';
// import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.page';
// import CheckoutPage from './pages/checkout/checkout.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';


class App extends React.Component {
  unsubscibeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
        console.log(this.state);
      }
      this.setState({ currentUser: user });
    });
  }
  componentWillUnmount() {
    this.unsubscibeFromAuth();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={() => this.props.currentUser ? <Constructor /> : <Redirect to="/signin" />} />
          <Route
            exact
            path='/signin'
            render={() => this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />}
          />
          <Route render={() => (<div>Not found</div>)} />
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
