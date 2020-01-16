import PrintActionTypes from './prints.types';

const INITIAL_STATE = {
	prints: null,
	activePrint: null
};
const printReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case PrintActionTypes.SET_PRINTS:
			return {
				...state,
				prints: action.payload,
				activePrint: action.payload[0]
			};
		case PrintActionTypes.SET_ACTIVE_PRINT:
			return {
				...state,
				activePrint: action.payload
			};
		default:
			return state;
	}
};

export default printReducer;
