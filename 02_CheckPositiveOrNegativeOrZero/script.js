// This program will check Wheter A Number Is negative or positive or zero
let integer = Number(prompt("Enter A Number"));

while (isNaN(integer)) {
  integer = Number(prompt("Enter A Number"));
}
if (integer > 0) {
  console.log(`${integer} Is Positive Number`);
} else if (integer === 0) {
  console.log(`${integer} Is 0`);
} else if (integer < 0) {
  console.log(`${integer} Is Negative Number`);
} else {
  alert("Please Enter A Valid Number");
}
