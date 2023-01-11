'use strict';

const dolphinsScore1 = 65;
const dolphinsScore2 = 54;
const dolphinsScore3 = 49;

const koalasScore1 = 17;
const koalasScore2 = 20;
const koalasScore3 = 23;

const calcAverage = (score1, score2, score3) => {
    const average = (score1 + score2 + score3)/3;
    return average;
}

const checkWinner = (avgScoreDolphins, avgScoreKoalas) => {
    if (avgScoreDolphins >= (avgScoreKoalas*2)){
       console.log(`The winner is Team Dolphins with score ${avgScoreDolphins} vs ${avgScoreKoalas}`);
    }
    else if(avgScoreDolphins*2 <= avgScoreKoalas){
       console.log(`The winner is Team Koalas with score ${avgScoreKoalas} vs ${avgScoreDolphins}`);
    }

    else{
        console.log("No team wins...!!!")
    }
}

const dolphinsAverage = calcAverage(85, 54, 41);
const koalasAverage = calcAverage(23, 34, 27);
console.log(`The average score of team dolphins is ${dolphinsAverage}`);
console.log(`The average score of team koalas is ${koalasAverage}`);

checkWinner(dolphinsAverage, koalasAverage);