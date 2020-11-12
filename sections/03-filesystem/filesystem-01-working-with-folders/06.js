const fs = require("fs");
const path = require("path");

const folderName = "myFolder";
const targetPath = path.join(__dirname, folderName);

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

createFolder(targetPath);
