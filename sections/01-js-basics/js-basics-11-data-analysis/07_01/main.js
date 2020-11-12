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

function createDataset(amount) {
  const dataset = [];

  for (let i = 0; i < amount; i = i + 1) {
    const randomPersonData = getRandomPersonData();
    dataset.push(randomPersonData);
  }

  return dataset;
}

const dataset = createDataset(10000);

// Which email providers exists in this dataset?
const data = dataset[0];
const email = data.email;
const emailLength = email.length;

let atSymbolIndex;
let emailProvider;

for (let i = 0; i < emailLength; i = i + 1) {
  const currentCharacter = email[i];

  if (currentCharacter === "@") {
    atSymbolIndex = i;
    break;
  }
}

if (atSymbolIndex !== undefined) {
  emailProvider = email.slice(atSymbolIndex + 1, emailLength);
}

console.log(emailProvider);
