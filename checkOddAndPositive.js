const number = 24;

if (number > 0) {
  console.log(number, "is a positive number");
  if (number % 2 !== 0) {
    console.log(number, "is a odd number");
  } else {
    console.log(number, "is a even number");
  }
} else if (number === 0) {
  console.log("the number is 0");
} else {
  console.log(number, "is not a positive number");
}
