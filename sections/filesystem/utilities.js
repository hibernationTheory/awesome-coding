const fs = require("fs");

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

module.exports = {
  createFolder,
};
