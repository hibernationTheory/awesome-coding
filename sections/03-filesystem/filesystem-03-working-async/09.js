const fs = require("fs");

const filePath = "temp.txt";

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    if (err.code === "ENOENT") {
      console.log("File does not exist");
    } else {
      console.log("Something went wrong");
    }
  } else {
    console.log(data);
  }
});
