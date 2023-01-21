// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 35;
// if(x === 35) console.log(23);

// const calcAge = birthYear => 2037 - birthYear;
// console.log();
// console.log(calcAge(1991));
// console.log(x);

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempMax = function(temps){
 let max = temps[0];
 let min = temps[0];
 for(let i = 0; i<temps.length; i++){
    let currTemp = temps[i];
    if(typeof currTemp !== 'number') continue;

    if(currTemp > max){
        max = currTemp ; 
    }
    if(currTemp < min){
        min = currTemp ; 
    }
 }
 console.log(max,min);
 return max - min;
}

const tempAmplitude = calcTempMax(temperatures);
console.log(`The amplitude is ${tempAmplitude}`);

// Problem 2
const temperaturesNew = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempMaxNew = function(t1, t2){
 const temps = t1.concat(t2);
 let max = temps[0];
 let min = temps[0];
 for(let i = 0; i<temps.length; i++){
    let currTemp = temps[i];
    if(typeof currTemp !== 'number') continue;

    if(currTemp > max){
        max = currTemp ; 
    }
    if(currTemp < min){
        min = currTemp ; 
    }
 }
 console.log(max,min);
 return max - min;
}

const tempAmplitudeNew = calcTempMaxNew([2,32,12],[3, 23, 19,45]);
console.log(`The amplitude is ${tempAmplitudeNew}`);