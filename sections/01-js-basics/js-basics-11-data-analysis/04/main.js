faker.seed(1);

function getRandomPersonData() {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const country = faker.address.country();
  const isStudent = faker.random.boolean();

  const personalInformation = {
    firstName,
    lastName,
    email,
    country,
    isStudent,
  };

  return personalInformation;
}

const amount = 10;
for (let i = 0; i < amount; i = i + 1) {
  const randomPersonData = getRandomPersonData();
  console.log(randomPersonData);
}
