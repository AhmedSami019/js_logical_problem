const a = 43;
const b = 23;
const c = 40;


if(a <= 0 || b <= 0 || c <= 0){
    console.log("a triangle's never have 0 value of it's side");
}else{
    if(a+b > c && b+c > a && c+a > b){
        console.log(true, "this is a triangle");
    }else{
        console.log(false, "this is not a triangle");
    }
}