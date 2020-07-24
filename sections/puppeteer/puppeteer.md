- we are going to do `npm i --save puppeteer`
- Let's create a folder called `puppeteer` and go into that folder.
- seems like the things that we need to understand at this point is the async operations.
- maybe here try-catch might make sense (but it might also make sense inside the file creation section as well.)

```
const puppeteer = require("puppeteer");

const main = () => {
  console.log(puppeteer);
};

main();
```

```
const puppeteer = require("puppeteer");

const main = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://example.com");
  await page.screenshot({ path: "example.png" });

  await browser.close();
};

main();

```

Notice how puppetter has a similar problem to the filesystem as well. It performs the saving of the file relative the directory that you call the file.
