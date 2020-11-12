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
