const puppeteer = require("puppeteer");

function main() {
  let browser;
  let page;

  puppeteer
    .launch()
    .then((_browser) => {
      browser = _browser;
      return browser.newPage();
    })
    .then((_page) => {
      page = _page;
      return page.goto("https://example.com");
    })
    .then(() => {
      const filePath = "example.png";
      return page.screenshot({ path: filePath });
    })
    .then(() => {
      browser.close();
    });
}

main();
