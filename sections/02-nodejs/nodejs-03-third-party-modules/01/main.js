const faker = require("faker");

function getPersonData() {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();

  const personalInformation = {
    firstName,
    lastName,
  };

  return personalInformation;
}

const person = getPersonData();
console.log(person);
