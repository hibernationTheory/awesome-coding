const hoursNeededForMastery = 10000;
const practiceAmountPerDay = 3;
const daysNeededForMastery =
  hoursNeededForMastery / practiceAmountPerDay;

const now = dayjs();
const targetDate = now.add(daysNeededForMastery, "day");
const targetDateFormatted = targetDate.format("DD/MM/YYYY");
console.log(
  `You should be able to achieve mastery by ${targetDateFormatted}`,
);
