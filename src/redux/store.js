import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-sagas';
import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

let applyMiddlewares = applyMiddleware(...middlewares);

if (process.env.NODE_ENV !== 'production') {
	applyMiddlewares = composeWithDevTools(applyMiddlewares);
}
export const store = createStore(rootReducer, applyMiddlewares);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };
