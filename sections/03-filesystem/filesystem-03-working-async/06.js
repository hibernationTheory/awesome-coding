const fs = require("fs");

const folderPath = "myFolder";

fs.mkdir(folderPath, (err) => {
  if (err) {
    if (err.code === "EEXIST") {
      console.log("Folder already exists");
    } else {
      console.log("Something went wrong");
    }
  } else {
    console.log("Success!");
  }
});

console.log("End of program");
