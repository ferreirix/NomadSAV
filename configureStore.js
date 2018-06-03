import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './src/reducers';
import dataSaga from './src/sagas/ticketsSagas';

const sagaMiddleware = createSagaMiddleware();


export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
  sagaMiddleware.run(dataSaga);
  return store;
}
