async function getPeople() {
  const response = await fetch('https://nomadsav.azurewebsites.net/api/loadtickets');
  // only proceed once promise is resolved
  const data = await response.json();
  // only proceed once second promise is resolved
  return data;
}

export default getPeople;
