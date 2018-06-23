import { combineReducers } from 'redux';
import appData from './ticketsReducer';
import toastMessage from './toastReducer';

const rootReducer = combineReducers({
  appData,
  toastMessage
});

export default rootReducer;
