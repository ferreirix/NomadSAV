import { put, takeEvery } from 'redux-saga/effects';
import * as actionNames from '../actions/constants';
import getTickets from '../azFunctions/ticketsAPI';

function* fetchData() {
  try {
    const data = yield getTickets();
    yield put({ type: actionNames.FETCHING_TICKETS_DONE, data });
  } catch (e) {
    yield put({ type: actionNames.FETCHING_TICKETS_ERROR });
  }
}

function* ticketsSaga() {
  yield takeEvery(actionNames.FETCHING_TICKETS, fetchData);
}

export default ticketsSaga;
