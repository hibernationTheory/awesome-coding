const fs = require("fs");

const filePath = "temp.txt";

const data = fs.readFileSync(filePath);
console.log(data);
