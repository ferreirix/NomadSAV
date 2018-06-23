import getAzureEndopoint from './azureFunctions';

export async function getTickets() {
  const response = await fetch(`${getAzureEndopoint()}/api/loadtickets`);
  // only proceed once promise is resolved
  const data = await response.json();
  // only proceed once second promise is resolved
  return data;
}

export async function createTicket(ticket) {
  const response = await fetch(`${getAzureEndopoint()}/api/createTicket`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(ticket.data)
  });

  // only proceed once promise is resolved
  const data = await response.json();
  // only proceed once second promise is resolved
  return data;
}
