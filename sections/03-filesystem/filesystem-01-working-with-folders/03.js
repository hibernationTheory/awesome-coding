const fs = require("fs");

const folderPath = "myFolder";

const folderExists = fs.existsSync(folderPath);
if (!folderExists) {
  fs.mkdirSync(folderPath);
} else {
  console.log("Folder exists");
}
