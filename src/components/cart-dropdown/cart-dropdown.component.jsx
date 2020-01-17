import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden, clearItemFromCart } from '../../redux/cart/cart.actions.js';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { submitOrder } from '../../firebase/firebase.utils';

import './cart-dropdown.styles.scss';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems, history, dispatch, total }) => {


	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{cartItems.length ? (
					cartItems.map(cartItem => (
						<CartItem key={cartItem.orderId} item={cartItem} />
					))
				) : (
						<span className='empty-message'>You cart is empty</span>
					)}
			</div>
			<div className="cart-total">Total: <span>{total} UAH</span></div>
			<CustomButton
				onClick={() => {
					submitOrder(cartItems);
					dispatch(clearItemFromCart());
					dispatch(toggleCartHidden());
				}}
			>
				Сonfirm purchase
		</CustomButton>
		</div>
	)
};
const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal
});

export default connect(mapStateToProps)(CartDropdown);
