import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import saga from '../saga';
import reducer from '../reducers';
const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(sagaMiddleware);
const store = createStore(reducer, {}, enhancer);

sagaMiddleware.run(saga);

export default store;
