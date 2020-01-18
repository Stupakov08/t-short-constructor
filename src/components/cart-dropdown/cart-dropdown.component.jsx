import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
	toggleCartHidden,
	clearItemFromCart
} from '../../redux/cart/cart.actions.js';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { submitOrder } from '../../firebase/firebase.utils';

import './cart-dropdown.styles.scss';
import {
	selectCartItems,
	selectCartTotal
} from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems, history, dispatch, total }) => {
	const dropdownRef = useRef();

	useEffect(() => {
		const clickHandler = e => {
			const target = e.target;
			const current = dropdownRef.current;
			if (document.contains(target) && !current.contains(target)) {
				dispatch(toggleCartHidden());
			}
		};
		document.addEventListener('click', clickHandler);
		return () => document.removeEventListener('click', clickHandler);
	}, [dispatch]);

	return (
		<div className='cart-dropdown' ref={dropdownRef}>
			<div className='cart-items'>
				{cartItems.length ? (
					cartItems.map(cartItem => (
						<CartItem key={cartItem.orderId} item={cartItem} />
					))
				) : (
					<span className='empty-message'>You cart is empty</span>
				)}
			</div>
			<div className='cart-total'>
				Total: <span>{total} UAH</span>
			</div>
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
	);
};
const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal
});

export default connect(mapStateToProps)(CartDropdown);
