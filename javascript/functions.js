function getGreeting(thePerson) {
  let { name, lastName } = thePerson;
  return `Hello ${name} ${lastName}`;
}

let person = {
  name: "Andrew",
  lastName: "Luca",
};

let message = getGreeting(person);

console.log(message);
