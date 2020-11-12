const Sentiment = require("sentiment");
const sentiment = new Sentiment();

const analysis = sentiment.analyze("I love coding in JavaScript");
console.log(analysis);
