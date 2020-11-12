function logStartAndEndForOperation(callbackFunction) {
  console.log("start of operation");
  callbackFunction();
  console.log("end of operation");
}

logStartAndEndForOperation(function () {
  console.log("this is a function that represents some operation");
});
