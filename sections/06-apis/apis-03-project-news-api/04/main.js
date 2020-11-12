const NewsAPI = require("newsapi");
const { API_KEY } = require("./config");
const dayjs = require("dayjs");

const newsapi = new NewsAPI(API_KEY);

async function main() {
  const now = dayjs();
  const dateFormat = "YYYY-MM-DD";

  const today = now.format(dateFormat);
  const monthAgo = now.subtract(1, "month").format(dateFormat);

  const response = await newsapi.v2.everything({
    q: "covid",
    language: "en",
    from: monthAgo,
    to: today,
    pageSize: 100,
  });

  console.log(response.articles);
}

main();
