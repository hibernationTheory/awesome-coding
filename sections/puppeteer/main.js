const path = require("path");
const puppeteer = require("puppeteer");

const TARGET_ROOT_PATH = path.join(__dirname, "images");

const main = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://example.com");
  const fileName = "example.png";
  const filePath = path.join(TARGET_ROOT_PATH, fileName);
  await page.screenshot({ path: filePath });

  await browser.close();
};

main();
