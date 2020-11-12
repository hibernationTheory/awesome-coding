const {
  getSymbol,
  getStockPrice,
  getCompanyOverview,
} = require("./stocks");

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
  const price = parseFloat(await getStockPrice(symbol));
  const companyData = await getCompanyOverview(symbol);

  const fiftyTwoWeekHigh = parseFloat(companyData["52WeekHigh"]);

  const percentageDiffFrom52WeekHigh =
    ((fiftyTwoWeekHigh - price) * 100) / price;

  console.log(`The current price for ${symbol} is $${price}.
It is ${percentageDiffFrom52WeekHigh}% below ${fiftyTwoWeekHigh}.`);
}

main();
