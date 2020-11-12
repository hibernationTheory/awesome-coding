const fs = require("fs");

const filePath = "temp.txt";

const data = fs.readFileSync(filePath, "utf8");
console.log(data);
