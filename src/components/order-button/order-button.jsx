import React from 'react';
import { connect } from 'react-redux';
import html2canvas from 'html2canvas';
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import {
	Price, PriceDiscount
} from './order-button.styled';

const OrderButton = ({
	currentUser,
	addItem,
	activePrint,
	activeColor,
	canvasRef
}) => {
	const Order = async e => {
		const screenshot = await html2canvas(canvasRef.current);
		const timestamp = +new Date();
		const order = {
			orderId: timestamp,
			price: 250,
			activeColor,
			activePrint,
			time: timestamp,
			user: {
				id: currentUser.id,
				email: currentUser.email,
				displayName: currentUser.displayName
			},
			screenshot: screenshot.toDataURL(),
		};
		addItem(order);
	};

	return (
		<>
			<Price>
				<PriceDiscount class="price-discount">500 UAH</PriceDiscount>250 UAH
			</Price>
			<CustomButton onClick={Order}> Order </CustomButton>
		</>
	);
};

const mapStateToProps = props => ({
	currentUser: props.user.currentUser,
	activeColor: props.colors.activeColor,
	activePrint: props.prints.activePrint
});
const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
});
export default connect(mapStateToProps, mapDispatchToProps)(OrderButton);
