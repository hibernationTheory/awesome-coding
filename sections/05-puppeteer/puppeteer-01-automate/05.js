const puppeteer = require("puppeteer");

async function main() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://example.com");
  const filePath = "example.png";
  await page.screenshot({ path: filePath });

  await browser.close();
}

main();
