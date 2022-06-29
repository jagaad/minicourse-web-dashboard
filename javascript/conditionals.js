let doWeHaveCoffee = true;
let isMorning = false;

if (isMorning && doWeHaveCoffee) {
  // console.log("You can take a big cup of coffee");
} else if (!isMorning && doWeHaveCoffee) {
  // console.log("No coffee in the evening");
} else {
  // console.log("You cannot drink coffee");
}

let messageToShow =
  isMorning && doWeHaveCoffee
    ? "You can take a big cup of coffee"
    : "You cannot drink coffee";

// console.log(messageToShow);

switch (true) {
  case isMorning && doWeHaveCoffee:
    console.log("You can take a big cup of coffee");
    break;
  case !isMorning && doWeHaveCoffee:
    console.log("No coffee in the evening");
    break;
  default:
    console.log("You cannot drink coffee");
    break;
}
