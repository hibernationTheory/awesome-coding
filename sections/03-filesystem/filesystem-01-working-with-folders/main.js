const fs = require("fs");

const FOLDER_NAME = "myFolder";
const TARGET_PATH = `${__dirname}/${FOLDER_NAME}`;

const createFolder = (path) => {
  console.log(`Creating a folder at: ${path}`);

  const folderExists = fs.existsSync(path);
  if (!folderExists) {
    fs.mkdirSync(path);
    console.log("Success!");
    return true;
  } else {
    console.log("Folder already exists");
  }

  return false;
};

createFolder(TARGET_PATH);
