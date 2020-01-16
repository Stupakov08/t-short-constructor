import React from 'react';
import { connect } from 'react-redux';
import { submitOrder } from '../../firebase/firebase.utils';
import html2canvas from 'html2canvas';
import CustomButton from '../custom-button/custom-button.component';

const OrderButton = ({
	currentUser,
	colors,
	prints,
	activePrint,
	activeColor,
	canvasRef
}) => {
	const Order = async e => {
		const screenshot = await html2canvas(canvasRef.current);
		const order = {
			screenshot: screenshot.toDataURL(),
			activeColor,
			activePrint,
			time: +new Date(),
			user: {
				id: currentUser.id,
				email: currentUser.email,
				displayName: currentUser.displayName
			}
		};
		let confirmation = window.confirm('Confirm Order');
		confirmation && submitOrder(order);
	};

	return <CustomButton onClick={Order}> Order </CustomButton>;
};

const mapStateToProps = props => ({
	currentUser: props.user.currentUser,
	colors: props.colors.colors,
	activeColor: props.colors.activeColor,
	prints: props.prints.prints,
	activePrint: props.prints.activePrint
});
export default connect(mapStateToProps)(OrderButton);
