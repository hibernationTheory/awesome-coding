const fetch = require("node-fetch");

async function main() {
  const url = "https://en.wikipedia.org/wiki/Main_Page";

  const response = await fetch(url);
  console.log(response);
  const body = await response.json();

  console.log(body);
}

main();
