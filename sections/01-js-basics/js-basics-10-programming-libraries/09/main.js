const durationInMs = 1000000;
const durationInText = humanizeDuration(durationInMs, {
  units: ["d"],
});
console.log(durationInText); // 0.011574074074074073 days
