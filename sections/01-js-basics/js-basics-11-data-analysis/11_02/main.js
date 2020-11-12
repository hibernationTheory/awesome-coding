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

// Which country has the most users?
function getCountryData(dataset) {
  const countryData = {};

  dataset.forEach((item) => {
    const country = item.country;

    if (!countryData[country]) {
      countryData[country] = 0;
    }

    countryData[country] = countryData[country] + 1;
  });

  return countryData;
}

function analyzeCountryData(countryData) {
  let users = 0;
  let countryName;

  Object.keys(countryData).forEach((country) => {
    const userCount = countryData[country];
    if (userCount > users) {
      users = userCount;
      countryName = country;
    }
  });

  return {
    users,
    country: countryName,
  };
}

const countryData = getCountryData(dataset);
const analyzedCountryData = analyzeCountryData(countryData);
console.log(analyzedCountryData);
