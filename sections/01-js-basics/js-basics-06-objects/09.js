let x = { number: 42 };
let y;

y = { ...x };
x.number = 7;

console.log(x);
console.log(y);
