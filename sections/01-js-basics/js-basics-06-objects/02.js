function hello() {
  console.log("Hello");
}

const person = {
  firstName: "John",
  lastName: "Doe",
  sayHello: hello,
};

person.sayHello();
