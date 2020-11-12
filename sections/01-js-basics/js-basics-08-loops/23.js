function checkLength(arr) {
  const result = [];

  arr.forEach((item) => {
    if (item.length > 4) {
      result.push(item);
    }
  });

  return result;
}

const arr = ["pizza", "taco", "egg", "sushi", "ice cream"];
const newArr = checkLength(arr);
console.log(newArr); // ["pizza", "sushi", "ice cream"]
