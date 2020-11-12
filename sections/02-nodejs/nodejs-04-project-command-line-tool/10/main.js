const readlineSync = require("readline-sync");
const { getProcessedArguments } = require("./arguments");
const { getRandomNumber } = require("./random");

function main() {
  const arguments = getProcessedArguments();
  const upperLimit = arguments.upperLimit;

  const randomNumber = getRandomNumber(upperLimit);
  let userNumber = readlineSync.question("Guess the number! ");
  userNumber = parseInt(userNumber);

  const success = userNumber === randomNumber;
  if (success) {
    console.log("Success. You won!");
  } else {
    console.log(
      `Nope! You have guessed ${userNumber}.
The generated number was ${randomNumber}.`,
    );
  }
}

main();
