const { createWorker } = require("tesseract.js");
const path = require("path");
const fs = require("fs");

const getText = async (worker, filePath) => {
  const {
    data: { text }
  } = await worker.recognize(filePath);
  console.log(text);
};

const main = async () => {
  const worker = createWorker();
  await worker.load();
  await worker.loadLanguage("eng");
  await worker.initialize("eng");

  console.log("worker is initialized");

  const rootPath = path.join(__dirname, "images");
  const filePaths = fs.readdirSync(rootPath);

  for await (filePath of filePaths) {
    if (filePath.startsWith(".")) {
      continue;
    }
    const fullFilePath = path.join(rootPath, filePath);
    console.log(fullFilePath);

    await getText(worker, fullFilePath);
  }

  console.log("worker terminate");
  await worker.terminate();
};

main();
