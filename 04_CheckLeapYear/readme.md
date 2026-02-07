# Leap Year Checker (JavaScript)

## Description
This is a beginner level JavaScript program that checks whether a given year is a leap year or not.

I am learning JavaScript step by step and building small programs like this to improve my fundamentals and problem solving skills.

## What is a Leap Year?
A year is called a leap year if:
- It is divisible by 400  
  OR
- It is divisible by 4 but not divisible by 100  

### Examples
- 2000 → Leap Year  
- 2024 → Leap Year  
- 1900 → Not a Leap Year  

## How the Program Works
1. The user is asked to enter a year.
2. The program checks whether the input is a valid number.
3. If the input is invalid, the user is asked again.
4. Leap year rules are applied.
5. The result is displayed in the console.

## JavaScript Code
```js
// This Program Check Wheter Given Year Is Leap Year Or Not!
let year = Number(prompt("Enter A Leap Year"));

while (isNaN(year)) {
  alert("Please Enter A Valid Year");
  year = Number(prompt("Enter A Leap Year"));
}

if (year % 400 === 0) {
  console.log(`${year} Is Leap Year`);
} else if (year % 4 === 0 && year % 100 != 0) {
  console.log(`${year} Is Leap Year`);
} else {
  console.log(`${year} Is Not A Leap Year`);
}
