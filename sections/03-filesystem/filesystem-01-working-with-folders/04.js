const fs = require("fs");

const targetPath = "myFolder";

const createFolder = (folderPath) => {
  const folderExists = fs.existsSync(folderPath);
  if (!folderExists) {
    fs.mkdirSync(folderPath);
    return true;
  } else {
    console.log("Folder exists");
  }

  return false;
};

createFolder(targetPath);
