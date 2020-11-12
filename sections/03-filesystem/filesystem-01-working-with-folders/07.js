const fs = require("fs");
const path = require("path");

const createFolder = (folderPath) => {
  console.log(`Creating a folder at: ${folderPath}`);

  const folderExists = fs.existsSync(folderPath);
  if (!folderExists) {
    fs.mkdirSync(folderPath);
    console.log("Success!");
    return true;
  } else {
    console.log("Folder already exists");
  }

  return false;
};

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
