function sayHello() {
  console.log("hello");
}

function delayForOneSecond(cb) {
  const duration = 1000;

  return new Promise((resolve) => {
    setTimeout(() => {
      if (cb) {
        cb();
      }
      resolve();
    }, duration);
  });
}

delayForOneSecond()
  .then(delayForOneSecond)
  .then(delayForOneSecond)
  .then(sayHello);
