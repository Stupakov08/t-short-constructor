import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import userReducer from './user/user.reducer';
import colorsReducer from './colors/colors.reducer';
import printReducer from './prints/prints.reducer';
import ordersReducer from './orders/orders.reducer';

const persistUserConfig = {
	key: 'user',
	storage
};

const rootReducer = combineReducers({
	user: persistReducer(persistUserConfig, userReducer),
	colors: colorsReducer,
	prints: printReducer,
	orders: ordersReducer
});

export default rootReducer;
