import { combineReducers } from 'redux';
import appData from './ticketsReducer';

const rootReducer = combineReducers({
  appData,
});

export default rootReducer;
