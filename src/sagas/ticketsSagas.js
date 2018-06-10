import { put, takeEvery } from 'redux-saga/effects';
import * as actionNames from '../actions/constants';
import { getTickets, createTicket } from '../azFunctions/ticketsAPI';

function* fetchData() {
  try {
    const data = yield getTickets();
    yield put({ type: actionNames.FETCHING_TICKETS_DONE, data });
  } catch (e) {
    yield put({ type: actionNames.FETCHING_TICKETS_ERROR });
  }
}

function* createTicketSaga(ticket) {
  try {
    const data = yield createTicket(ticket);
    yield put({ type: actionNames.CREATE_TICKET_DONE, data });
  } catch (e) {
    yield put({ type: actionNames.CREATE_TICKET_ERROR });
  }
}

const ticketSagas = [
  takeEvery(actionNames.FETCHING_TICKETS, fetchData),
  takeEvery(actionNames.CREATE_TICKET, createTicketSaga),
];

export default ticketSagas;