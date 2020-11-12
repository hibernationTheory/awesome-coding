const { getSymbol } = require("./stocks");

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
  console.log(symbol);
}

main();
