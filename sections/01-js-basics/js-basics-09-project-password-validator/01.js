// min 8, max 12 chars
// no space at the start or end
// should at least include 2 special chars of: !@#$%^&*
// no repeating chars
// need to have at least 2 numbers

function passwordValidator(password) {
  // returns true if is a valid password
  // otherwise returns false
}

const disallowedPasswords = [
  "1234567", // too few characters
  "123456789101112", // too many characters
  "12345678 ", // has space at the end
  " 12345678", // has space at the beginning
  "12345678", // does not include 2 special chars
  "12345678!", // does not include 2 special chars
  "123456778!@", // repeating char 7
  "12345678!!@", // repeating char !
  "abcdefgh!@", // does not have numbers
  "abcdefgh!@1", // does not have enough numbers
];

disallowedPasswords.forEach((password) => {
  const isSuccessfullyValidated =
    passwordValidator(password) === false;
  if (!isSuccessfullyValidated) {
    console.log(`validation failed for ${password}`);
  }
});