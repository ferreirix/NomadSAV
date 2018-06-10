import { all } from 'redux-saga/effects';
import ticketSagas from './ticketsSagas';

export default function* rootSaga() {
    yield all([
        ...ticketSagas,
    ]);
}