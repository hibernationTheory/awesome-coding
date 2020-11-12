function countdown(message, startingNumber = 10) {
  while (startingNumber > 0) {
    console.log(startingNumber);
    startingNumber = startingNumber - 1;
  }
}

countdown("Launch!");
