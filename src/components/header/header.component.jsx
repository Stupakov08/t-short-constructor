import React from 'react';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import SideBar from './sidebar';
import CartIcon from '../cart-icon/cart-icon.components';
import logo from '../../assets/icons/signinlogo.png';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { clearUser } from '../../redux/user/user.actions';
import { clearItemFromCart } from '../../redux/cart/cart.actions.js';
import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink,
	Content,
	Title,
	Burger,
	DesktopMenu
} from './header.styles';

const Header = ({ currentUser, hidden, signOut }) => (
	<HeaderContainer>
		<Burger>
			<SideBar>
				<OptionLink className='menu-item' to='/'>
					Constructor
				</OptionLink>
				<OptionLink className='menu-item' to='/orders'>
					My orders
				</OptionLink>
				<OptionLink
					className='menu-item'
					to=''
					onClick={() => auth.signOut().then(() => signOut())}
				>
					Sign out
				</OptionLink>
			</SideBar>
		</Burger>
		<Content>
			<LogoContainer to={'/'}>
				<img src={logo} className='logo' alt='' />
				<Title>Fill Yuriy</Title>
			</LogoContainer>

			<OptionsContainer>
				<DesktopMenu>
					<OptionLink to='/'>Constructor</OptionLink>
					<OptionLink to='/orders'>My orders</OptionLink>
					<OptionLink
						to=''
						onClick={() => auth.signOut().then(() => signOut())}
					>
						Sign out
					</OptionLink>
				</DesktopMenu>
				<CartIcon />
			</OptionsContainer>
			{hidden ? null : <CartDropdown />}
		</Content>
	</HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});
const mapDispatchToProps = dispatch => ({
	signOut: () => {
		dispatch(clearUser());
		dispatch(clearItemFromCart());
	}
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
