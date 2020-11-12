// min 8, max 12 chars
// no space at the start or end
// should at least include 2 special chars of: !@#$%^&*
// no repeating chars
// need to have at least 2 numbers

function checkLength(password, min, max) {
  const length = password.length;

  if (length < min) {
    return false;
  }

  if (length > max) {
    return false;
  }

  return true;
}

function checkIfSpaceAtEitherEnd(password) {
  const length = password.length;

  const firstChar = password[0];
  const lastChar = password[length - 1];
  const spaceChar = " ";

  if (firstChar === spaceChar || lastChar === spaceChar) {
    return false;
  }

  return true;
}

function hasValidAmoutOfSpecialCharacters(password) {
  const length = password.length;
  const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*"];
  let specialCharMatchCount = 0;

  specialChars.forEach((char) => {
    for (let i = 0; i < length; i = i + 1) {
      const currentChar = password[i];
      if (currentChar === char) {
        specialCharMatchCount = specialCharMatchCount + 1;
      }
    }
  });

  if (specialCharMatchCount < 2) {
    return false;
  }

  return true;
}

function hasRepetition(password) {
  for (let i = 0; i < length; i = i + 1) {
    const currentChar = password[i];
    const previousChar = password[i - 1];
    if (currentChar === previousChar) {
      return false;
    }
  }

  return true;
}

function hasValidAmountOfNumbers(password) {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let numberCount = 0;

  numbers.forEach((number) => {
    const numberStr = number.toString();
    for (let i = 0; i < length; i = i + 1) {
      const currentChar = password[i];
      if (currentChar === numberStr) {
        numberCount = numberCount + 1;
      }
    }
  });

  if (numberCount < 2) {
    return false;
  }

  return true;
}

function passwordValidator(password) {
  const minAllowedLength = 8;
  const maxAllowedLength = 12;

  if (!checkLength(password, minAllowedLength, maxAllowedLength)) {
    return false;
  }

  if (checkIfSpaceAtEitherEnd(password)) {
    return false;
  }

  if (!hasValidAmoutOfSpecialCharacters(password)) {
    return false;
  }

  if (hasRepetition(password)) {
    return false;
  }

  if (!hasValidAmountOfNumbers(password)) {
    return false;
  }

  return true;
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

const results = disallowedPasswords.map((password) => {
  const isSuccessfullyValidated =
    passwordValidator(password) === false;

  if (!isSuccessfullyValidated) {
    console.log(`validation failed for ${password}`);
    return false;
  }

  return true;
});

const finalResults = results.filter((result) => result);
console.log(
  `total success is ${finalResults.length} out of ${disallowedPasswords.length}`,
);
