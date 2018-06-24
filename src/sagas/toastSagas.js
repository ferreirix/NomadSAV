import { put } from 'redux-saga/effects';
import { SHOW_TOAST, HIDE_TOAST } from '../actions/constants';

export function* showToast(toast) {
    yield put({ type: SHOW_TOAST, toast });
}

export function* hideToast() {
    yield put({ type: HIDE_TOAST });
}