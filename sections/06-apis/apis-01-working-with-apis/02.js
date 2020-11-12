const fetch = require("node-fetch");

async function main() {
  const url = "https://api.github.com/users/github";

  const response = await fetch(url);
  console.log(response);
  const data = await response.json();

  console.log(data);
  console.log(data.name);
}

main();
