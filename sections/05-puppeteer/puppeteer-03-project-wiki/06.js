const puppeteer = require("puppeteer");

async function main() {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  const urlPath = "https://en.wikipedia.org/wiki/Special:Random";
  await page.goto(urlPath);
  const filePath = "example.png";
  await page.screenshot({ path: filePath });

  const [title, description] = await page.evaluate(() => {
    const title = document.querySelector("h1");
    const titleText = title.innerText;

    const description = document.querySelector(
      "#mw-content-text .mw-parser-output p",
    );
    const descriptionText = description.innerText;

    return [titleText, descriptionText];
  });

  console.log(title, description);

  await browser.close();
}

main();
