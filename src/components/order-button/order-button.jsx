import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItem, toggleCartHidden } from '../../redux/cart/cart.actions';

import { Price, PriceDiscount } from './order-button.styled';

const OrderButton = ({
	currentUser,
	addItem,
	activePrint,
	activeColor,
	activeSize,
	toggleCartHidden
}) => {
	const Order = async e => {
		const timestamp = +new Date();
		const order = {
			orderId: timestamp,
			price: 299,
			activeColor,
			activePrint,
			activeSize,
			time: timestamp,
			user: {
				id: currentUser.id,
				email: currentUser.email,
				displayName: currentUser.displayName
			}
		};
		addItem(order);
		toggleCartHidden();
	};

	return (
		<>
			<Price>
				<PriceDiscount>650 UAH</PriceDiscount>299 UAH
				<span className='capture'>The price may vary after order.</span>
			</Price>
			<CustomButton onClick={Order}>Add to basket</CustomButton>
		</>
	);
};

const mapStateToProps = props => ({
	currentUser: props.user.currentUser,
	activeColor: props.colors.activeColor,
	activePrint: props.prints.activePrint,
	activeSize: props.sizes.activeSize
});
const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item)),
	toggleCartHidden: item => dispatch(toggleCartHidden(true))
});
export default connect(mapStateToProps, mapDispatchToProps)(OrderButton);
