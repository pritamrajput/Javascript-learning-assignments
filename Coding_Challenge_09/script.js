// Challenge-01
'use strict';
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  
    printGoals : function(...recievedPlayers){
  console.log(recievedPlayers);
    }
  };

// TASK 1 
console.log(`-----This is TASK 1-----`);
const playerScore = game.scored;

for(const x of playerScore.entries()){
    console.log(`Goal ${x[0]+1}: ${x[1]}`);
}

// TASK 2
console.log(`-----This is TASK 2-----`);
const averageOdd = game.odds
let sum = 0;
for(const num of Object.values(averageOdd)){
    sum+=num;
}
console.log(sum/Object.values(averageOdd).length);

// TASK 3
console.log(`-----This is TASK 3-----`);

const main = game;

for(const [team, odd] of Object.entries(game.odds)){
    const str = team === "x" ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${str} : ${odd}`);
}
