function passwordValidator(password) {}

let myPassword = "1234"; // shorter than 8 characters
let result = passwordValidator(myPassword) === false;
console.log(result);

myPassword = "1234567Z"; // 8 characters.
result = passwordValidator(myPassword) === true;
console.log(result);
