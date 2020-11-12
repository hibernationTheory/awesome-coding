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

// How many users there are for each email provider?
// Determine the amount of users as well as percentage to the total.
function getEmailProvider(email) {
  const atSymbolIndex = email.indexOf("@");
  const emailProvider = email.slice(atSymbolIndex + 1, email.length);

  return emailProvider;
}

function analyzeEmailProviders(dataset) {
  const emailProviderData = {};

  dataset.forEach((item) => {
    const email = item.email;
    const emailProvider = getEmailProvider(email);

    if (!emailProviderData[emailProvider]) {
      emailProviderData[emailProvider] = 0;
    }

    emailProviderData[emailProvider] =
      emailProviderData[emailProvider] + 1;
  });

  return emailProviderData;
}

const emailProviderAnalysis = analyzeEmailProviders(dataset);
console.log(emailProviderAnalysis);
