const readlineSync = require("readline-sync");
const { getProcessedArguments } = require("./arguments");
const { getRandomNumber } = require("./random");

function main() {
  const arguments = getProcessedArguments();
  const upperLimit = arguments.upperLimit;
  const rounds = arguments.rounds || 3;

  const randomNumber = getRandomNumber(upperLimit);

  let currentRound = 1;
  while (currentRound <= rounds) {
    let userNumber = readlineSync.question("Guess the number! ");
    userNumber = parseInt(userNumber);

    const success = userNumber === randomNumber;
    if (success) {
      console.log("Success. You won!");
      return;
    } else {
      console.log(`Nope!`);
    }

    currentRound = currentRound + 1;
  }

  console.log(`Nope! The generated number was ${randomNumber}.`);
}

main();
