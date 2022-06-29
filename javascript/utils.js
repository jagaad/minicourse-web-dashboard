export function getGreeting(person) {
  let { firstName, lastName } = person;
  return `Hello ${firstName} ${lastName}`;
}
