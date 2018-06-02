import * as actionNames from './constants';

export default function getTickets() {
  return {
    type: actionNames.FETCHING_TICKETS,
  };
}

//   export function getTicketsSuccess(data) {
//     return {
//       type: actionNames.FETCHING_TICKETS_DONE,
//       data,
//     };
//   }

//   export function getTicketsFailure() {
//     return {
//       type: actionNames.FETCHING_TICKETS_ERROR
//     };
//   }
