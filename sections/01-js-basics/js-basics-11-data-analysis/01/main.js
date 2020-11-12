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

console.log(personalInformation);
