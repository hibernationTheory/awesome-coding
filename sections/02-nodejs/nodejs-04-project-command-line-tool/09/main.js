const { getProcessedArguments } = require("./arguments");
const { getRandomNumber } = require("./random");

function main() {
  const arguments = getProcessedArguments();
  const upperLimit = arguments.upperLimit;

  const randomNumber = getRandomNumber(upperLimit);
  console.log(randomNumber);
}

main();
