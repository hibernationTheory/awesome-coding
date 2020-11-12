const person = {
  firstName: "John",
  lastName: "Doe",
  sayHello: function hello() {
    console.log("Hello");
  },
  age: 42,
  isAlive: true,
  workInformation: {
    companyName: "NASA",
    position: "Software Engineer",
  },
  children: null,
};

const anotherPerson = { ...person };

anotherPerson.firstName = "Jane";
anotherPerson.workInformation.companyName = "SpaceX";

console.log(person.firstName);
console.log(person.workInformation.companyName);
