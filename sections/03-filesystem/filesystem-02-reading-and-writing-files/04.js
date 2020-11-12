const message = "This is the error message";
const error = new Error(message);
console.log(error.message);

throw error;

console.log("End of Program");
