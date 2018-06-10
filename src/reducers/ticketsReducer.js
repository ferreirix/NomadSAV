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
    case actionNames.CREATE_TICKET:
      return {
        ...state,
        isLoading: true,
        ticket: action.data,
      };
    case actionNames.CREATE_TICKET_DONE:
      return {
        ...state,
        isLoading: false,
      };
    case actionNames.CREATE_TICKET_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
}
