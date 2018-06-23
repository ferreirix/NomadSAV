import { put } from 'redux-saga/effects';
import { SHOW_TOAST } from '../actions/constants';

export default function* showToast(toast) {
    yield put({ type: SHOW_TOAST, toast });
}