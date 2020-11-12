const fs = require("fs");

const folderPath = "myFolder";

const callback = (err) => {
  if (err) {
    if (err.code === "EEXIST") {
      console.log("Folder already exists");
    } else {
      console.log("Something went wrong");
    }
  } else {
    console.log("Success!");
  }
};

fs.mkdir(folderPath, callback);
