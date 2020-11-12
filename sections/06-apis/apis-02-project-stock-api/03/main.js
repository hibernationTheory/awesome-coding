const { getSymbol } = require("./stocks");

async function main() {
  const companyName = "tesla";
  const symbol = await getSymbol(companyName);
  console.log(symbol);
}

main();
