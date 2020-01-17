import SizeActionTypes from './sizes.types';

const INITIAL_STATE = {
	sizes: null,
	activeSize: null
};
const sizeReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SizeActionTypes.SET_SIZES:
			return {
				...state,
				sizes: action.payload,
				activeSize: action.payload[0]
			};
		case SizeActionTypes.SET_ACTIVE_SIZES:
			return {
				...state,
				activeSize: action.payload
			};
		default:
			return state;
	}
};

export default sizeReducer;
