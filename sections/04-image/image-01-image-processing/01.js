const Jimp = require("jimp");

const sourceFilePath = "./source.jpg";
const targetFilePath = "./source_updated.jpg";

Jimp.read(sourceFilePath, (err, image) => {
  if (err) {
    console.log("Something went wrong");
    throw err;
  }

  image
    .resize(512, 512)
    .greyscale()
    .write(targetFilePath, (err) => {
      if (err) {
        console.log("Something went wrong");
        throw err;
      }

      console.log("Successfully completed");
    });
});
