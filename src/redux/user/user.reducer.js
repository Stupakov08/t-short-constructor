import UserActionTypes from './user.types';

const INITIAL_STATE = {
	currentUser: null
};
const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				error: null
			};
		case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
			return {
				...state,
				error: action.payload
			};
		case UserActionTypes.CLEAR_USER:
			return {
				...state,
				currentUser: null
			};
		default:
			return state;
	}
};

export default userReducer;
