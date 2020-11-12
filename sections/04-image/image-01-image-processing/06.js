const Jimp = require("jimp");

const sourceFilePath = "./source.jpg";
const targetFilePath = "./source_updated.jpg";

let image;

Jimp.read(sourceFilePath)
  .then((_image) => {
    image = _image;

    return Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
  })
  .then((font) => {
    return image
      .resize(512, 512)
      .greyscale()
      .print(font, 10, 10, "Image Title")
      .write(targetFilePath);
  })
  .then(() => {
    console.log("Successfully completed");
  })
  .catch((err) => {
    console.log(err);
    throw err;
  });
