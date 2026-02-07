# Find the Greatest of Three Numbers

This JavaScript program finds the largest number among three numbers entered by the user. It also validates the input to make sure only numbers are accepted.

## Code

```js
let num1 = Number(prompt("Enter your first number"));
let num2 = Number(prompt("Enter your second number"));
let num3 = Number(prompt("Enter your third number"));

while (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
  alert("Please enter valid numbers");
  num1 = Number(prompt("Enter your first number"));
  num2 = Number(prompt("Enter your second number"));
  num3 = Number(prompt("Enter your third number"));
}

let greatest = Math.max(num1, num2, num3);
console.log(`${greatest} is the greatest number`);
