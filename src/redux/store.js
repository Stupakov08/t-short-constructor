import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

const middlewares = [];

let applyMiddlewares = applyMiddleware(...middlewares);

if (process.env.NODE_ENV !== 'production') {
    applyMiddlewares = composeWithDevTools(applyMiddlewares)
}
export const store = createStore(rootReducer, applyMiddlewares);

export const persistor = persistStore(store);

export default { store, persistor };
