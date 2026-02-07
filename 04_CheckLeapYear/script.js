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
