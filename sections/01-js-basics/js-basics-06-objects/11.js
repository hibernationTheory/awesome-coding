function getPerson(firstName, lastName) {
  return {
    firstName,
    lastName,
    sayHello: function () {
      console.log(
        `Hello, my name is ${this.firstName} ${this.lastName}`,
      );
    },
  };
}

const personA = getPerson("John", "Doe");
const personB = getPerson("Jane", "Doe");

personA.sayHello();
personB.sayHello();
