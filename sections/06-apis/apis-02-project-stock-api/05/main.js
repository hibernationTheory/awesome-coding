const { getSymbol, getStockPrice } = require("./stocks");

function getCommandLineArgument() {
  const argument = process.argv[2];

  return argument;
}

async function main() {
  const companyName = getCommandLineArgument();
  if (!companyName) {
    console.log("Please provide a company name to continue.");
    return;
  }
  const symbol = await getSymbol(companyName);
  const price = await getStockPrice(symbol);

  console.log(`The current price for ${symbol} is $${price}`);
}

main();
