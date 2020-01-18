import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setOrders } from '../../redux/orders/orders.actions';
import { getUserOrders } from '../../firebase/firebase.utils';
import {
	Content,
	AdminArea,
	Overflowik,
	OrderList,
	OrderItem,
	OrderImage,
	OrderColumn,
	OrderHeaderItem
} from './orders.styled';
import Header from '../../components/header/header.component';
import SimpleCanvas from '../../components/canvas/simple-canvas';

const Orders = ({ setOrders, orders, user }) => {
	useEffect(() => {
		getUserOrders(user).then(res => {
			let orders = res.docs.map(snap => ({ id: snap.id, ...snap.data() }));
			orders = orders.sort(function(x, y) {
				return y.time - x.time;
			});
			setOrders(orders);
		});
	}, [setOrders, user]);

	return (
		<>
			<Header></Header>
			<Overflowik>
				<Content>
					<AdminArea>
						<OrderHeaderItem>
							<OrderImage>Image</OrderImage>
							<OrderColumn>Id</OrderColumn>
							<OrderColumn>Size</OrderColumn>
							<OrderColumn>Color</OrderColumn>
							<OrderColumn>Print</OrderColumn>
							<OrderColumn>Time</OrderColumn>
							<OrderColumn>Price</OrderColumn>
							<OrderColumn>Status</OrderColumn>
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
												activePrint={order.activePrint}
												activeColor={order.activeColor}
											></SimpleCanvas>
										</OrderImage>
										<OrderColumn>{order.id}</OrderColumn>
										<OrderColumn>{order.activeSize.name}</OrderColumn>
										<OrderColumn>{order.activeColor.url}</OrderColumn>
										<OrderColumn>{order.activePrint.url}</OrderColumn>
										<OrderColumn>
											{(() => {
												let date = new Date(order.time);
												return date.toUTCString();
											})()}
										</OrderColumn>
										<OrderColumn>{order.price} UAH</OrderColumn>
										<OrderColumn>
											{order.status === 'finished' ? 'Recieved' : 'In progress'}
										</OrderColumn>
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
	orders: props.orders.orders,
	user: props.user.currentUser
});
const mapDispatchToProps = dispatch => ({
	setOrders: orders => {
		dispatch(setOrders(orders));
	}
});
export default connect(mapStateToProps, mapDispatchToProps)(Orders);
