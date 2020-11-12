function checkLength(arr) {
  const result = arr.map((item) => {
    if (item.length > 4) {
      return item;
    }
  });

  return result;
}

const arr = ["pizza", "taco", "egg", "sushi", "ice cream"];
const newArr = checkLength(arr);
console.log(newArr); // ["pizza", undefined, undefined, "sushi", "ice cream"]
