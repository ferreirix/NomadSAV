import * as actionNames from '../actions/constants';

const initialState = {
  tickets: [],
  ticketsFetched: false,
  isLoading: false,
  error: false,
};

export default function ticketsReducer(state = initialState, action) {
  switch (action.type) {
    case actionNames.FETCHING_TICKETS:
      return {
        ...state,
        isLoading: true,
      };
    case actionNames.FETCHING_TICKETS_DONE:
      return {
        ...state,
        isLoading: false,
        tickets: action.data,
        ticketsFetched: true,
      };
    case actionNames.FETCHING_TICKETS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
}
