import { SHOW_TOAST } from '../actions/constants'

const initialState = {
    message: null,
};

export default function toastMessage(state = initialState, action) {
    switch (action.type) {
        case SHOW_TOAST:
            return {
                ...state,
                ...action,
            };
        default:
            return state
    }
}

