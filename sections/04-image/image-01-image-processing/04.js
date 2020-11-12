function sayHello() {
  console.log("hello");
}

function delayForOneSecond(cb) {
  const duration = 1000;
  setTimeout(cb, duration);
}

delayForOneSecond(() => {
  delayForOneSecond(() => {
    delayForOneSecond(() => {
      sayHello();
    });
  });
});
