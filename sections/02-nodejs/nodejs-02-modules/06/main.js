const math = require("./math");

const { add, multiply, average } = math;

const numbers = [1, 3, 5, 7, 9];

const total = add(numbers);
const mult = multiply(numbers);
const avg = average(numbers);

console.log(total, mult, avg);
