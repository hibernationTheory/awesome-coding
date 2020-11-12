function countdown(message, startingNumber = 10) {
  if (startingNumber <= 1) {
    console.log("Please enter a number bigger than 1.");
    return;
  }

  for (let i = startingNumber; i > 0; i = i - 1) {
    console.log(i);
  }

  console.log(message);
}

countdown("Launch!", 5);
