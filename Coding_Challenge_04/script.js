const billValue = 430;

const valueTip = (billValue>=50 && billValue<=300) ? (billValue*15)/100 : (billValue*20)/100;

console.log(`The value of the bill is ${billValue}, so the tip we should give is ${valueTip}. Now the total bill becomes ${billValue + valueTip}`)

// By if/else statment
let valueTip1;
if(billValue>=50 && billValue<=300){
    valueTip1 = (billValue*15)/100 ;
}
else{
    valueTip1 = (billValue*20)/100 ;
}
console.log(`The value of the bill is ${billValue}, so the tip we should give is ${valueTip1}. Now the total bill becomes ${billValue + valueTip1}`)