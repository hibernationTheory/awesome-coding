const genericError = new Error("Something went wrong");

try {
  throw genericError;
} catch (errorObj) {
  console.log(errorObj);
}

console.log("End of program");
