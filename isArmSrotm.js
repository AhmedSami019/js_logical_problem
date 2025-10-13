const number = 153;
let newNumber = 0;

const stringNumber = number.toString()
// console.log(stringNumber);

for (let i = 0; i < stringNumber.length; i++) {
    const eachNumber = Number(stringNumber[i]);
    // console.log(eachNumber);

    let cubeOfNumber = eachNumber ** 3;
    // console.log(cubeOfNumber);
    newNumber = newNumber + cubeOfNumber
}
if(number === newNumber){
    console.log(number, "is a armStorm number");
}else{
    console.log(number, "is not a armStorm number");
}
