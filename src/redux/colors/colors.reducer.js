import ColorActionTypes from './colors.types';

const INITIAL_STATE = {
	colors: null,
	activeColor: null
};
const colorReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ColorActionTypes.SET_COLORS:
			return {
				...state,
				colors: action.payload
			};
		case ColorActionTypes.SET_ACTIVE_COLOR:
			return {
				...state,
				activeColor: action.payload
			};
		default:
			return state;
	}
};

export default colorReducer;
