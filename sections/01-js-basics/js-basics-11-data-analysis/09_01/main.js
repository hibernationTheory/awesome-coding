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

// Which user has the longest email address and what is that address?
function findTheLongestEmailAddress(dataset) {
  let length = 0;
  let email;

  dataset.forEach((item) => {
    const emailAddress = item.email;
    const emailLength = emailAddress.length;

    if (emailLength > length) {
      length = emailLength;
      email = emailAddress;
    }
  });

  return {
    length,
    email,
  };
}

const longestEmailAddress = findTheLongestEmailAddress(dataset);
console.log(longestEmailAddress);
