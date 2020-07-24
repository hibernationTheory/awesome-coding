const path = require("path");
const puppeteer = require("puppeteer");

const TARGET_URL =
  "https://en.wikipedia.org/wiki/List_of_countries_by_population_(United_Nations)";

const TARGET_ROOT_PATH = path.join(__dirname, "data");

const main = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(TARGET_URL);
  const fileName = "example.png";
  const filePath = path.join(TARGET_ROOT_PATH, fileName);
  await page.screenshot({ path: filePath });

  await browser.close();
};

main();
