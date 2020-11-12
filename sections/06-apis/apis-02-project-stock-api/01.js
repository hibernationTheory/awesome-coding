const fetch = require("node-fetch");
const { API_KEY } = require("./config");

async function getSymbol(companyName) {
  const endpointUrl = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${companyName}&apikey=${API_KEY}`;
  const response = await fetch(endpointUrl);
  const data = await response.json();

  console.log(data);
}

async function main() {
  const companyName = "tesla";
  await getSymbol(companyName);
}

main();
