let myValues = ["Hey", "Lorem", "ipsum", "dolor", "sit", "amet"];
let myObject = {
  propery1: "Lorem",
  propery2: "ipsum",
  propery3: "dolor",
  propery4: "sit",
  propery5: "amet",
};

// for

for (let i = 0; i < myValues.length; i++) {
  let value = myValues[i];
  // console.log(value);
}

// for in Arrays
for (let key in myValues) {
  let value = myValues[key];
  // console.log(value);
}

// for in Objects
for (let key in myObject) {
  let value = myObject[key];
  // console.log(value);
}

// for of Arrays
for (let value of myValues) {
  // console.log(value);
}

// for of Objects
let entries = Object.entries(myObject);
for (let [key, value] of entries) {
  console.log(value);
}

// while

let i = 0;
while (i < myValues.length) {
  let value = myValues[i];
  // console.log(value);
  i++;
}

// -----
// do / while
// forEach
