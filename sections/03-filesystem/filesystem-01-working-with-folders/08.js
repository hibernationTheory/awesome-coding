const path = require("path");
const { createFolder } = require("./utilities");

const main = () => {
  const parentFolderName = "myFolder";
  const parentFolderPath = path.join(__dirname, parentFolderName);

  const childFolderPrefix = "subFolder_";
  const childFolderAmount = 10;

  createFolder(parentFolderPath);
  for (let i = 0; i < childFolderAmount; i++) {
    const childFolderPath = path.join(
      __dirname,
      parentFolderName,
      `${childFolderPrefix}${i}`,
    );
    createFolder(childFolderPath);
  }
};

main();
