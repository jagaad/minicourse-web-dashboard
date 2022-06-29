let myValues = ["Hey", "Lorem", "ipsum", "dolor", "sit", "amet"];

console.log(myValues);

// map

let myValuesDashed = myValues.map((arrayItem) => `✅ ${arrayItem}`);

// console.log(myValuesDashed);

// includes

let doWeHaveHey = myValues.includes("Hey");

// console.log(doWeHaveHey);

// filter

let wordWithO = myValues.filter((item) => item.includes("o"));

// console.log(wordWithO);

// every

let allHasCheck = myValues
  .map((arrayItem) => `✅ ${arrayItem}`)
  .every((item) => item.includes("✅"));

// console.log(allHasCheck);

// some

let someHasO = myValues.some((item) => item.includes("o"));

// console.log(someHasO);

// find

let findFirstO = myValues.find((item) => item.includes("o"));

// console.log(findFirstO);

// forEach

myValues.forEach((item) => {
  console.log(item);
});
