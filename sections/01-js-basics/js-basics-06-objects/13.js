class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello = function () {
    console.log(
      `Hello, my name is ${this.firstName} ${this.lastName}`,
    );
  };
}

const personA = new Person("John", "Doe");
const personB = new Person("Jane", "Doe");

personA.sayHello();
personB.sayHello();
