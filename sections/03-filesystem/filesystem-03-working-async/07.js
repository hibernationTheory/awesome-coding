const fs = require("fs");

const filePath = "temp.txt";
const fileData = "hello world";

fs.writeFile(filePath, fileData, (err) => {
  if (err) {
    console.log(err);
  }
});
