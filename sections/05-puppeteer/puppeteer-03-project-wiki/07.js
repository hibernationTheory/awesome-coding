const puppeteer = require("puppeteer");

async function main() {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  const urlPath = "https://en.wikipedia.org/wiki/Special:Random";
  await page.goto(urlPath);
  const filePath = "example.png";
  await page.screenshot({ path: filePath });

  const [title, description, url] = await page.evaluate(() => {
    const title = document.querySelector("h1");
    const titleText = title.innerText;

    const description = document.querySelector(
      "#mw-content-text .mw-parser-output p",
    );
    const descriptionText = description.innerText;

    const url = window.location.href;

    return [titleText, descriptionText, url];
  });

  console.log(`
Title: ${title}
Description: ${description}
Read More at: ${url}
`);

  await browser.close();
}

main();
