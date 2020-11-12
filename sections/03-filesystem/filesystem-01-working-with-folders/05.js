const fs = require("fs");

const folderName = "myFolder";
const targetPath = `${__dirname}/${folderName}`;

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
