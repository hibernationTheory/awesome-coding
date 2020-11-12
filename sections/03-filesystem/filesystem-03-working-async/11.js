const fs = require("fs");

const getTextData = (text) => {
  const numChars = text.length;
  const numWords = text.split(" ").length;

  console.log(
    `Given text has ${numChars} characters and ${numWords} words.`,
  );
};

const main = () => {
  const filePath = "temp.txt";

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log("Something went wrong");
      console.log(err);
      return;
    } else {
      getTextData(data);
    }
  });
};

main();
