import { SHOW_TOAST, HIDE_TOAST } from '../actions/constants'

const initialState = {
    toastMessage: null,
};

export default function toastMessage(state = initialState, action) {
    switch (action.type) {
        case SHOW_TOAST:
            return {
                ...state,
                toastMessage: action.toastMessage,
            };
        case HIDE_TOAST:
            return {
                ...state,
                toastMessage: null,
            }
        default:
            return state
    }
}

