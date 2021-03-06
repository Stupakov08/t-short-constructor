import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setOrders } from '../../redux/orders/orders.actions';
import {
	getOrders,
	pickUpOrder,
	finishOrder
} from '../../firebase/firebase.utils';
import CustomButton from '../../components/custom-button/custom-button.component';
import {
	Content,
	AdminArea,
	Overflowik,
	OrderList,
	OrderItem,
	OrderImage,
	OrderColumn,
	VerticalFlex,
	OrderHeaderItem
} from './admin.styled';
import Header from '../../components/header/header.component';
import {
	setPickUpOrder,
	setFinishOrder
} from '../../redux/orders/orders.actions';
import SimpleCanvas from '../../components/canvas/simple-canvas';

const Admin = ({ setOrders, orders, setPickUpOrder, setFinishOrder }) => {
	useEffect(() => {
		getOrders().then(res => {
			let orders = res.docs.map(snap => ({ id: snap.id, ...snap.data() }));
			orders = orders.sort(function(x, y) {
				return y.time - x.time;
			});
			setOrders(orders);
		});
	}, [setOrders]);

	const pickUpHandle = order => () => {
		if (order.status === 'pickedup') return;
		pickUpOrder(order.id);
		setPickUpOrder(order);
	};
	const finishOrderHandle = order => () => {
		if (order.status === 'finished') return;
		finishOrder(order.id);
		setFinishOrder(order);
	};
	return (
		<>
			<Header></Header>
			<Overflowik>
				<Content>
					<AdminArea>
						<OrderHeaderItem>
							<OrderImage>Image</OrderImage>
							<OrderColumn>Id</OrderColumn>
							<OrderColumn>EMail</OrderColumn>
							<OrderColumn>Name</OrderColumn>
							<OrderColumn>Size</OrderColumn>
							<OrderColumn>Color</OrderColumn>
							<OrderColumn>Print</OrderColumn>
							<OrderColumn>Time</OrderColumn>
							<OrderColumn></OrderColumn>
						</OrderHeaderItem>
						<OrderList>
							{orders &&
								orders.map((order, i) => (
									<OrderItem
										key={order.id}
										semiTransparent={order.status === 'finished'}
									>
										<div>{i + 1}</div>
										<OrderImage>
											<SimpleCanvas
												activeColor={order.activeColor}
												activePrint={order.activePrint}
											></SimpleCanvas>
										</OrderImage>
										<OrderColumn>{order.id}</OrderColumn>
										<OrderColumn>{order.user.email}</OrderColumn>
										<OrderColumn>{order.user.displayName}</OrderColumn>
										<OrderColumn>{order.activeSize.name}</OrderColumn>
										<OrderColumn>
											<div>{order.activeColor.name}</div>
											<div>{order.activeColor.url}</div>
										</OrderColumn>
										<OrderColumn>
											<div>{order.activePrint.name}</div>
											<div>{order.activePrint.url}</div>
										</OrderColumn>
										<OrderColumn>
											{(() => {
												let date = new Date(order.time);
												return date.toUTCString();
											})()}
										</OrderColumn>
										<VerticalFlex>
											<CustomButton
												small
												onClick={pickUpHandle(order)}
												disabled={
													order.status === 'pickedup' ||
													order.status === 'finished'
												}
											>
												Picked up
											</CustomButton>
											<CustomButton
												small
												onClick={finishOrderHandle(order)}
												disabled={order.status === 'finished'}
											>
												Given away
											</CustomButton>
										</VerticalFlex>
									</OrderItem>
								))}
						</OrderList>
					</AdminArea>
				</Content>
			</Overflowik>
		</>
	);
};

const mapStateToProps = props => ({
	orders: props.orders.orders
});
const mapDispatchToProps = dispatch => ({
	setOrders: orders => {
		dispatch(setOrders(orders));
	},
	setPickUpOrder: order => {
		dispatch(setPickUpOrder(order));
	},
	setFinishOrder: order => {
		dispatch(setFinishOrder(order));
	}
});
export default connect(mapStateToProps, mapDispatchToProps)(Admin);
