const fs = require("fs");

const filePath = "temp.txt";

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
