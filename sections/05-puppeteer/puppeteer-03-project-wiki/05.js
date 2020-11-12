const puppeteer = require("puppeteer");

async function main() {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  const urlPath = "https://en.wikipedia.org/wiki/Special:Random";
  await page.goto(urlPath);
  const filePath = "example.png";
  await page.screenshot({ path: filePath });

  const selector = "h1";
  const title = await page.evaluate((selector) => {
    const title = document.querySelector(selector);
    const titleText = title.innerText;

    return titleText;
  }, selector);

  console.log(title);

  await browser.close();
}

main();
