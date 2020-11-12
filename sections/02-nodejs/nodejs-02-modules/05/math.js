function add(numbers) {
  let total = 0;
  numbers.forEach((number) => {
    total = total + number;
  });

  return total;
}

function multiply(numbers) {
  let total = 1;
  numbers.forEach((number) => {
    total = total * number;
  });

  return total;
}

function average(numbers) {
  const total = add(numbers);
  return total / numbers.length;
}

module.exports = {
  add: add,
  multiply: multiply,
  average: average,
};
