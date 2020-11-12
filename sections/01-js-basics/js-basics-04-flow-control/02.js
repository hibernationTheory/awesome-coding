let isTrue = true && true;
console.log(isTrue); // true

isTrue = 10 === 10 && 10 !== 11;
console.log(isTrue); // true

let isFalse = true && false;
console.log(isFalse); // false

isFalse = false && true;
console.log(isFalse); // false

isFalse = false && false;
console.log(isFalse); // false
