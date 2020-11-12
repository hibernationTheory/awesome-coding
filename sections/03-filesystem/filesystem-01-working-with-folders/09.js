const path = require("path");
const { createFolder } = require("./utilities");

const main = () => {
  const parentFolderName = "project";
  const subFolderNames = ["assets", "output", "plugins"];

  const parentFolderPath = path.join(__dirname, parentFolderName);
  createFolder(parentFolderPath);

  subFolderNames.forEach((folderName) => {
    const folderPath = path.join(
      __dirname,
      parentFolderName,
      folderName,
    );
    createFolder(folderPath);
  });
};

main();
