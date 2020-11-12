const name = "John Doe";
const email = "john.doe@gmail.com";
const city = "Vancouver";
const favoriteNumbers = "1,3,7,19,42";
const date = "2/2/2222";

const nameArr = name.split(" ");
const nameArr2 = name.split(".");
const emailArr = email.split("@");
const cityArr = city.split();
const favoriteNumbersArr = favoriteNumbers.split(",");
const dateArr = date.split("/");

console.log(nameArr); // [ 'John', 'Doe' ]
console.log(nameArr2); // [ 'John Doe' ]
console.log(emailArr); // [ 'john.doe', 'gmail.com' ]
console.log(cityArr); // [ 'V', 'a', 'n', 'c', 'o', 'u', 'v', 'e', 'r' ]
console.log(favoriteNumbersArr); // [ '1', '3', '7', '19', '42' ]
console.log(dateArr); // [ '2', '2', '2222' ]
