function getRandomNumber(upperLimit = 10) {
  const randomNumber = Math.random() + 0.1;
  let scaledRandomNumber = Math.ceil(
    randomNumber * parseInt(upperLimit),
  );
  if (scaledRandomNumber === 0) {
    scaledRandomNumber = 1;
  }

  return scaledRandomNumber;
}

module.exports = {
  getRandomNumber,
};
