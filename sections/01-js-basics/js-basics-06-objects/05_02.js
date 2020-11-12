const person = {
  firstName: "John",
  lastName: "Doe",
  sayHello: () => {
    console.log(
      `Hello, my name is ${this.firstName} ${this.lastName}`,
    );
  },
};

person.sayHello(); // Hello, my name is undefined undefined

person.firstName = "Jane";
person.sayHello(); // Hello, my name is undefined undefined
