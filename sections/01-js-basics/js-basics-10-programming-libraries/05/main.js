const now = dayjs();
const currentDate = now.format("DD/MM/YYYY");
console.log(currentDate);

const targetDate = now.add(999, "day");
const targetDateFormatted = targetDate.format("DD/MM/YYYY");
console.log(targetDateFormatted);
