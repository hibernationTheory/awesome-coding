function getDateForMastery(practiceAmountPerDay) {
  const hoursNeededForMastery = 10000;
  const daysNeededForMastery =
    hoursNeededForMastery / practiceAmountPerDay;

  const now = dayjs();
  const targetDate = now.add(daysNeededForMastery, "day");
  const targetDateFormatted = targetDate.format("DD/MM/YYYY");
  console.log(
    `You should be able to achieve mastery by ${targetDateFormatted} when working ${practiceAmountPerDay} hours per day.`,
  );
}

getDateForMastery(1);
getDateForMastery(3);
getDateForMastery(5);
getDateForMastery(8);
