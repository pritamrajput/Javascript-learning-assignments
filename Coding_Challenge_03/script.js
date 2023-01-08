const dolphinsScoreOne = 120;
const dolphinsScoreTwo = 101;
const dolphinsScoreThree = 89;

const koalasScoreOne = 120;
const koalasScoreTwo = 101;
const koalasScoreThree = 89;

const dolphinsAverageScore = (dolphinsScoreOne + dolphinsScoreTwo + dolphinsScoreThree)/3;
const koalasAverageScore = (koalasScoreOne + koalasScoreTwo + koalasScoreThree)/3;

console.log(`Score of dolphins is ${dolphinsAverageScore}`);
console.log(`Score of koalas is ${koalasAverageScore}`)

if(dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore>=100){
    console.log(`Congrats! Team Dolphins is the winner with a average score of ${dolphinsAverageScore}...!!!`);
    console.log(`Congrats! Team Koalas is the runner-up with a average score of ${koalasAverageScore}...!!!`);
}
else if((dolphinsAverageScore === koalasAverageScore) && dolphinsAverageScore>=100 && koalasAverageScore>=100){
    console.log(` OOPS! Its a Draw...!!! with a score of ${koalasAverageScore}`);
}
else if(koalasAverageScore > dolphinsAverageScore && koalasAverageScore>=100){
    console.log(`Congrats! Team Koalas is the winner with a average score of ${koalasAverageScore}...!!!`);
    console.log(`Congrats! Team Dolphins is the runner-up with a average score of ${dolphinsAverageScore}...!!!`);
}
else{
    console.log(`Team scores less than ${100}`);
}

