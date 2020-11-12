function getProcessedArguments() {
  const userArguments = getCommandLineArguments();

  const processedArguments = {};

  userArguments.forEach((arg) => {
    const argArray = arg.split("=");
    const [argKey, argValue] = argArray;

    if (argValue) {
      processedArguments[argKey] = argValue;
    }
  });

  return processedArguments;
}

function getCommandLineArguments() {
  const arguments = process.argv.slice(2, process.argv.length);
  return arguments;
}

module.exports = {
  getProcessedArguments,
};
