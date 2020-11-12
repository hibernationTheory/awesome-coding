const Jimp = require("jimp");

const filePath = "./cat.jpg";

Jimp.read(filePath, (err, image) => {
  if (err) {
    console.log("Something went wrong");
    throw err;
  }

  Jimp.loadFont(Jimp.FONT_SANS_128_WHITE, (err, font) => {
    if (err) {
      console.log("Something went wrong");
      throw err;
    }

    image
      .print(font, 10, 10, "This is a cat")
      .write("./cat_updated.jpg", (err, result) => {
        if (err) {
          console.log("Something went wrong");
          throw err;
        }

        console.log(result);
      });
  });

  //   image
  //     .resize(256, 256) // resize
  //     .quality(60) // set JPEG quality
  //     .greyscale() // set greyscale
  //     .write("./cat-manipulated.jpg"); // save
});
