'use strict'

const calcTip = function(billValue){
 if(billValue >= 50 && billValue <= 300){
   const tipValue = (billValue*15)/100 ;
   return tipValue;
 }
 else{
   const tipValue = (billValue*20)/100 ;
   return tipValue;
 }
}

const bills = [125, 555, 44];

const tip1 = calcTip(bills[0]);
console.log(tip1);
const tip2 = calcTip(bills[1]);
const tip3 = calcTip(bills[2]);

const tip = [tip1, tip2, tip3];
console.log(`The tip calculated are`);
console.log(tip);

const totalBill = [bills[0]+tip1,bills[1]+tip2,bills[2]+tip3];
console.log(`The total bill calculated for each bill is`)
console.log(totalBill);