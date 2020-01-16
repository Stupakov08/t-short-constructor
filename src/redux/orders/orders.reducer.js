import OrderActionTypes from './orders.types';

const INITIAL_STATE = {
	orders: null
};
const orderReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case OrderActionTypes.SET_ORDERS:
			return {
				...state,
				orders: action.payload
			};
		case OrderActionTypes.PICK_UP:
			return {
				...state,
				orders: state.orders.map(o => {
					if (o.id === action.payload.id) {
						o.status = "pickedup"
					}
					return o;
				})
			};
		case OrderActionTypes.FINISH:
			return {
				...state,
				orders: state.orders.map(o => {
					if (o.id === action.payload.id) {
						o.status = "finished"
					}
					return o;
				})
			};

		default:
			return state;
	}
};

export default orderReducer;
