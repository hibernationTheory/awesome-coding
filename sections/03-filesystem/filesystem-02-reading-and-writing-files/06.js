const fs = require("fs");

const readFileSync = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return data;
  } catch (err) {
    console.log("Something went wrong");
    console.log(err);
  }

  return null;
};

const main = () => {
  const filePath = "temp.txt";
  const data = readFileSync(filePath);
  console.log("Data contained in the file is:");
  console.log(data);
};

main();
