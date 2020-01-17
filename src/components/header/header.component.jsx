import React from 'react';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.components';
import logo from '../../assets/icons/signinlogo.png';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { clearUser } from '../../redux/user/user.actions';
import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink,
	Content,
	Title
} from './header.styles';

const Header = ({ currentUser, hidden, signOut }) => (
	<HeaderContainer>
		<Content>
			<LogoContainer>
				<img src={logo} className='logo' alt="" />
				<Title>
					Fill Yuriy
				</Title>
			</LogoContainer>

			<OptionsContainer>
				<OptionLink to="" onClick={() => auth.signOut().then(() => signOut())}>
					SIGN OUT
				</OptionLink>
				<CartIcon />
			</OptionsContainer>
			{hidden ? null : <CartDropdown />}
		</Content>
	</HeaderContainer >
);

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});
const mapDispatchToProps = dispatch => ({
	signOut: () => { dispatch(clearUser()) }
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
