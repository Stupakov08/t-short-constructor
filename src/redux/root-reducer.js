import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import colorsReducer from './colors/colors.reducer';
import printReducer from './prints/prints.reducer';

const rootReducer = combineReducers({
	user: userReducer,
	colors: colorsReducer,
	prints: printReducer
});

export default rootReducer;
