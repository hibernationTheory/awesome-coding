const fetch = require("node-fetch");
const { API_KEY } = require("./config");

async function getStockQuote(symbol) {
  const endpointUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;
  const response = await fetch(endpointUrl);
  const data = await response.json();

  return data;
}

async function getStockPrice(symbol) {
  const data = await getStockQuote(symbol);

  return data["Global Quote"]["05. price"];
}

async function getCompanyOverview(symbol) {
  const endpointUrl = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${API_KEY}`;
  const response = await fetch(endpointUrl);
  const data = await response.json();

  return data;
}

function filterSymbolSearchResults(searchResults) {
  const matches = searchResults.bestMatches;
  const matchesFromUS = matches.filter((symbolData) => {
    if (symbolData["4. region"] === "United States") {
      return true;
    }
  });

  const match =
    (matchesFromUS[0] && matchesFromUS[0]["1. symbol"]) || null;

  return match;
}

async function getSymbol(companyName) {
  const endpointUrl = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${companyName}&apikey=${API_KEY}`;
  const response = await fetch(endpointUrl);
  const data = await response.json();

  return filterSymbolSearchResults(data);
}

module.exports = {
  getSymbol,
  getStockPrice,
  getCompanyOverview,
};
