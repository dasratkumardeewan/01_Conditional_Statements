// This Function Returns The Largest Number
let num1 = Number(prompt("Enter Your First Number"));
let num2 = Number(prompt("Enter Your Second Number"));
let num3 = Number(prompt("Enter Your Third Number"));

while (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
  alert("Please enter valid numbers");
  num1 = Number(prompt("Enter Your First Number"));
  num2 = Number(prompt("Enter Your Second Number"));
  num3 = Number(prompt("Enter Your Third Number"));
}

let greatest = Math.max(num1, num2, num3);
console.log(`${greatest} is the greatest number`);
