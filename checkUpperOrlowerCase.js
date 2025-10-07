const text = "There are two people in Iceland"
let upperCase = 0;
let lowerCase = 0;

const uppercaseLetters = [
  "A", "B", "C", "D", "E", "F", "G",
  "H", "I", "J", "K", "L", "M", "N",
  "O", "P", "Q", "R", "S", "T", "U",
  "V", "W", "X", "Y", "Z"
];

for (let i = 0; i < text.length; i++) {
    const element = text[i];
    console.log(element);

    if (uppercaseLetters.includes(element)) {
      upperCase++;
    }else{
      lowerCase++
    }
}

console.log("the upper case number is ", upperCase);
console.log("the lower case number is ", lowerCase);
