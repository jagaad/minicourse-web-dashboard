console.log("Hello from Console!!!");

// window.alert("Heeeey!!!");

let heading = document.querySelector(".the-heading");

console.log(heading);
console.log(heading.textContent);

heading.innerHTML =
  '<span style="text-decoration: underline;">This heading</span> was changed using JavaScript';

heading.style.color = "red";
