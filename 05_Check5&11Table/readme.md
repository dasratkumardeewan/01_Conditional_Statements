# Divisibility Checker (5 and 11) – JavaScript

## Description
This is a beginner level JavaScript program that checks whether a given number is divisible by **5**, **11**, or **both**.

I created this program while learning JavaScript step by step to strengthen my fundamentals and improve problem-solving skills.

## How the Program Works
1. The user is prompted to enter a number.
2. The program validates the input to ensure it is a number.
3. It checks whether the number is divisible by:
   - Both 5 and 11  
   - Only 5  
   - Only 11  
   - Neither 5 nor 11  
4. The result is displayed in the console.

## Examples
- Input: `55` → Output: `55 is divisible by both 5 and 11`  
- Input: `25` → Output: `25 is divisible by 5`  
- Input: `22` → Output: `22 is divisible by 11`  
- Input: `7` → Output: `7 is neither divisible by 5 nor 11`  

## JavaScript Code
```js
// This program checks whether a number is divisible by 5, 11, or both

let number = Number(prompt("Enter a number to check divisibility by 5 and 11"));

while (isNaN(number)) {
  alert("Invalid input. Please enter a valid number");
  number = Number(prompt("Enter a number to check divisibility by 5 and 11"));
}

if (number % 5 === 0 && number % 11 === 0) {
  console.log(`${number} is divisible by both 5 and 11`);
} else if (number % 5 === 0) {
  console.log(`${number} is divisible by 5`);
} else if (number % 11 === 0) {
  console.log(`${number} is divisible by 11`);
} else {
  console.log(`${number} is neither divisible by 5 nor 11`);
}
