function getCommandLineArguments() {
  const arguments = process.argv.slice(2, process.argv.length);
  return arguments;
}

function getRandomNumber(upperLimit = 10) {
  const randomNumber = Math.random() + 0.1;
  const scaledRandomNumber = Math.floor(randomNumber * upperLimit);

  return scaledRandomNumber;
}

function main() {
  getCommandLineArguments();

  const randomNumber = getRandomNumber();
  console.log(randomNumber);
}

main();
