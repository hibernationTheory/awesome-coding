const randomNumber = Math.random() + 0.1;
let scaledRandomNumber = Math.ceil(randomNumber * 10);
if (scaledRandomNumber === 0) {
  scaledRandomNumber = 1;
}
console.log(scaledRandomNumber);
