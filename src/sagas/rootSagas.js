import { all } from 'redux-saga/effects';
import ticketSagas from './ticketsSagas';
import toastSagas from './toastSagas';

export default function* rootSaga() {
    yield all([
        ...ticketSagas,
        toastSagas,
    ]);
}