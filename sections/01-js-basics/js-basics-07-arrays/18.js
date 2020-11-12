function passwordValidator(password) {
  const passwordLength = password.length;

  if (passwordLength < 8) {
    return false;
  }

  if (passwordLength > 12) {
    return false;
  }

  const lastCharacterIndex = passwordLength - 1;
  const lastCharacter = password[lastCharacterIndex];

  if (lastCharacter !== "Z") {
    return false;
  }

  return true;
}

let myPassword = "1234"; // shorter than 8 characters
let result = passwordValidator(myPassword) === false;
console.log(result);

myPassword = "1234567Z"; // 8 characters.
result = passwordValidator(myPassword) === true;
console.log(result);

myPassword = "1234567890101"; // longer than 12 characters
result = passwordValidator(myPassword) === false;
console.log(result);

myPassword = "123456789"; // does not have the 'Z' character at the end.
result = passwordValidator(myPassword) === false;
console.log(result);
