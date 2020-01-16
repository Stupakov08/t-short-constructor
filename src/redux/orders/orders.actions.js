import OrderActionTypes from './orders.types';

export const setOrders = (orders) => ({
	type: OrderActionTypes.SET_ORDERS,
	payload: orders
});

export const setPickUpOrder = order => ({
	type: OrderActionTypes.PICK_UP,
	payload: order
})

export const setFinishOrder = order => ({
	type: OrderActionTypes.FINISH,
	payload: order
})
