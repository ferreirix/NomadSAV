import * as actionNames from './constants';

export function getTickets() {
  return {
    type: actionNames.FETCHING_TICKETS,
  };
}

export function createTicket(ticket) {
  return {
    type: actionNames.CREATE_TICKET,
    data: ticket,
  };
}