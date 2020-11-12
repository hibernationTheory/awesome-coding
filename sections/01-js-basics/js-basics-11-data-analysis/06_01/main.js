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

// How many students are there?
function getStudentsData(dataset) {
  let numStudents = 0;
  for (let i = 0; i < dataset.length; i = i + 1) {
    const currentItem = dataset[i];
    const { isStudent } = currentItem;
    if (isStudent) {
      numStudents = numStudents + 1;
    }
  }

  return {
    amount: numStudents,
    percentage: (numStudents / dataset.length) * 100,
  };
}

const studentsData = getStudentsData(dataset);
console.log(studentsData);
