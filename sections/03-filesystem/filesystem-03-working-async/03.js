const someOperation = () => {
    console.log('this is a function that represents some operation');
}

const logStartAndEndForOperation = (callbackFunction) => {
    const importantValue = 42;
    console.log('start of operation');
    callbackFunction(importantValue);
    console.log('end of operation');
}

logStartAndEndForOperation(someOperation);