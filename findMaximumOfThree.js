const num1 = 43
const num2 = 4
const num3 = 5

if(num1 > num2){
    if(num1 > num3){
        console.log(num1, "is greater");
    }else{
        console.log(num3, "is greater");
    }
}else if(num2 > num3){
    console.log(num2, "is greater");
}else{
    console.log(num3, "is greater");
}

