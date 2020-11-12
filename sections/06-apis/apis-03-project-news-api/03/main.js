const NewsAPI = require("newsapi");
const { API_KEY } = require("./config");

const newsapi = new NewsAPI(API_KEY);

async function main() {
  const response = await newsapi.v2.everything({
    q: "covid",
    language: "en",
    from: "2021-02-02",
    to: "2021-03-02",
    pageSize: 100,
  });

  console.log(response.articles);
}

main();
