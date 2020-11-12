const NewsAPI = require("newsapi");
const { API_KEY } = require("./config");
const dayjs = require("dayjs");
const Sentiment = require("sentiment");

const newsapi = new NewsAPI(API_KEY);
const sentiment = new Sentiment();

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

  const articles = response.articles.map((article) => {
    return article.title;
  });

  let totalSentiment = 0;
  let positiveWords = [];
  let negativeWords = [];

  articles.forEach((article) => {
    const sentimentData = sentiment.analyze(article);
    const sentimentScore = sentimentData.comparative;
    positiveWords = [...positiveWords, ...sentimentData.positive];
    negativeWords = [...negativeWords, ...sentimentData.negative];

    totalSentiment = totalSentiment + sentimentScore;
  });

  if (totalSentiment < 0) {
    console.log(
      `Sentiment is negative with score of ${totalSentiment}. Words that describe the sentiment are: ${negativeWords.join(
        ", ",
      )}...`,
    );
  } else {
    console.log(
      `Sentiment is positive with score of ${totalSentiment}. Words that describe the sentiment are: ${positiveWords.join(
        ", ",
      )}...`,
    );
  }
}

main();
