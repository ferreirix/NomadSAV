import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './src/reducers';
import rootSaga from './src/sagas/rootSagas';

const sagaMiddleware = createSagaMiddleware();


export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
  sagaMiddleware.run(rootSaga);
  return store;
}
