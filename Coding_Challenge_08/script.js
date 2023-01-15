'use strict'
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52,];
const tips = [];
const total = [];

const calcTip = (billValue) => {
   if(billValue>=50 && billValue <= 300){
    const tip  = billValue*15/100;
    return tip
   }
   else{
    const tip  = billValue*20/100;
    return tip
   }
}

for(let i = 0; i<=bills.length - 1; i++){
// tips[i] = calcTip(bills[i]);
const tip = calcTip(bills[i]);
tips.push(tip);
total[i] = tip + bills[i];

}

console.log(tips);
console.log(total);

//  Challenge 08.1
const calcAverage = (arrAverage) => {
     let sum = 0;
     let average;
    for(let i = 0; i<=arrAverage.length - 1; i++){
      sum  = sum + arrAverage[i];
    }
    average = sum/arrAverage.length ;
    return average;
}

const arr = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const totals = calcAverage(arr);

console.log(`The average of the value in the array is ${totals}`);
