const person = {
  firstName: "John",
  lastName: "Doe",
  sayHello: function hello() {
    console.log(
      `Hello, my name is ${this.firstName} ${this.lastName}`,
    );
  },
};

person.sayHello();

person.firstName = "Jane";
person.sayHello();
