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
