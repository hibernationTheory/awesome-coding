const puppeteer = require("puppeteer");

function formatText(title, description) {
  return `Title: ${title}\nDescription: ${description}`;
}

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

    const descriptions = document.querySelectorAll(
      "#mw-content-text .mw-parser-output p",
    );
    const descriptionText = descriptions[1].innerText;

    return [titleText, descriptionText];
  });

  const formattedText = formatText(title, description);
  console.log(formattedText);

  await browser.close();
}

main();
