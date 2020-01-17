import React from 'react';
import html2canvas from 'html2canvas';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import { Price, PriceDiscount } from './order-button.styled';

const OrderButton = ({
	currentUser,
	addItem,
	activePrint,
	activeColor,
	activeSize,
	canvasRef
}) => {
	const Order = async e => {
		const screenshot = await html2canvas(canvasRef.current);
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
			},
			screenshot: screenshot.toDataURL()
		};
		addItem(order);
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
	addItem: item => dispatch(addItem(item))
});
export default connect(mapStateToProps, mapDispatchToProps)(OrderButton);
