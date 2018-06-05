import * as actionNames from './constants';

export default function getTickets() {
  return {
    type: actionNames.FETCHING_TICKETS,
  };
}
