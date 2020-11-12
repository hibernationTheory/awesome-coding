function getRandomNumber(upperLimit = 10) {
  const randomNumber = Math.random() + 0.1;
  let scaledRandomNumber = Math.ceil(randomNumber * upperLimit);
  if (scaledRandomNumber === 0) {
    scaledRandomNumber = 1;
  }

  return scaledRandomNumber;
}

function main() {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
}

main();
