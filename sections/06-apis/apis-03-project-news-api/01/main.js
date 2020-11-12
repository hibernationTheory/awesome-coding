const NewsAPI = require("newsapi");
const { API_KEY } = require("./config");

const newsapi = new NewsAPI(API_KEY);
console.log(newsapi);
