const NewsAPI = require("newsapi");
const { API_KEY } = require("./config");

const newsapi = new NewsAPI(API_KEY);

async function main() {
  const response = await newsapi.v2.everything({
    q: "covid",
    language: "en",
  });

  console.log(response.articles);
}

main();
