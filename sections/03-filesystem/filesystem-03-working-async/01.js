const fs = require("fs");

const folderPath = "myFolder";

const callback = (err) => {
  console.log(err);
};

fs.mkdir(folderPath, callback);
