import * as actionNames from './constants';

export default function addToast(message) {
    return { type: actionNames.SHOW_TOAST, message }
}
