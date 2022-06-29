import { getGreeting } from "./utils.js";

let person = {
  firstName: "Andrew",
  lastName: "Luca",
};

let greeting = getGreeting(person);

console.log(greeting);
