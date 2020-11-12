function multiplier(arr, multiplierNum = 2) {
  const result = [];

  for (let i = 0; i < arr.length; i = i + 1) {
    const currentItem = arr[i];
    const newItem = currentItem * multiplierNum;
    result.push(newItem);
  }

  return result;
}

const arr = [1, 2, 3, 4, 5];
const newArr = multiplier(arr, 3);

console.log(arr); // [1, 2, 3, 4, 5];
console.log(newArr); // [3, 6, 9, 12, 15];
