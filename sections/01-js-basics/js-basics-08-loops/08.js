function countdown(message, startingNumber = 10) {
  if (startingNumber <= 1) {
    console.log("Please enter a number bigger than 1.");
    return;
  }

  for (
    let countdownNumber = startingNumber;
    countdownNumber > 0;
    countdownNumber = countdownNumber - 1
  ) {
    console.log(countdownNumber);
  }

  console.log(message);
}

countdown("Launch!", 5);
