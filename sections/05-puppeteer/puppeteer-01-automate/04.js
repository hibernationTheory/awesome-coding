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

async function main() {
  await delayForOneSecond();
  await delayForOneSecond();
  await delayForOneSecond();
  sayHello();
}

main();
console.log("Start of the program");
