function countdown(message, startingNumber = 10) {
  if (startingNumber <= 1) {
    console.log("Please enter a number bigger than 1.");
    return;
  }

  while (startingNumber > 0) {
    console.log(startingNumber);
    startingNumber = startingNumber - 1;
  }

  console.log(message);
}

countdown("Launch!", 0);
