function helloWorld() {
  console.log("Hello World");
}

const oneSecond = 1000; // one second is 1000ms
const threeSeconds = oneSecond * 3;

setTimeout(helloWorld, threeSeconds);
