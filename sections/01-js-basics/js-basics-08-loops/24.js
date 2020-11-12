function checkLength(arr) {
  return arr.filter((item) => {
    if (item.length > 4) {
      return true;
    }

    return false;
  });
}

const arr = ["pizza", "taco", "egg", "sushi", "ice cream"];
const newArr = checkLength(arr);
console.log(newArr); // ["pizza", "sushi", "ice cream"]
