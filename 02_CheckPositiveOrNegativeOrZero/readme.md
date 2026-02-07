# Check if a Number is Positive, Negative, or Zero

This JavaScript program checks whether a number entered by the user is positive, negative, or zero. It also validates the input to ensure only numbers are accepted.

## Code

```js
let integer = Number(prompt("Enter a number"));

while (isNaN(integer)) {
  integer = Number(prompt("Enter a number"));
}

if (integer > 0) {
  console.log(`${integer} is a Positive number`);
} else if (integer === 0) {
  console.log(`${integer} is Zero`);
} else {
  console.log(`${integer} is a Negative number`);
}
