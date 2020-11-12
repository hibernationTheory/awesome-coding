const fs = require("fs");

const folderPath = "myFolder";

const folderExists = fs.existsSync(folderPath);
console.log(folderExists);
