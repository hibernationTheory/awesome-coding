const fs = require("fs");

const filePath = "temp.txt";
const fileData = "hello world";

fs.writeFileSync(filePath, fileData);
