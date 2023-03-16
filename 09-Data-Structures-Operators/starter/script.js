'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['Mon','Tue', 'Thu', 'Fri', 'Sat', 'Sun']
const openingHours1 = {
  [weekdays[2]]: {
    open: 12,
    close: 22,
  },
  [weekdays[3]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  } 
}
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(startIndex, mainIndex){
    return [this.starterMenu[startIndex],this.mainMenu[mainIndex]];
  },
  
  //Before ES6 placing external objects inside an object
  openingHours : openingHours1,
  // After ES6 enhanced object literals
  openingHours1,
   
  // Practical application of desctructing objects 
  orderDelivery: function({starterIndex = 1,mainIndex = 0,time = '20:00',address}){
   console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delvered to ${address} at ${time}`);
  },

  // Order pasta 
  orderPasta: function(ing1, ing2, ing3){
   console.log(`This is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`); 
  },

  // Newer way to write method in ES6 :- we just have to write the method name and than define it
  orderPasta(ing1, ing2, ing3){
    console.log(`This is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`); 
   },

  // Order Pizza
   orderPizza: function(mainIngradient, ...otherIngredient){
     console.log(mainIngradient);
     console.log(otherIngredient);
   }
};

// Without optional chaining
if(restaurant.openingHours && restaurant.openingHours.mon){
  console.log(restaurant.openingHours.mon.open)
}

// with optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example from real world problem of using optional chaining   
const days = ['Mon','Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

for(const day of days){
 const open = restaurant.openingHours[day]?.open ?? 'closed';
 console.log(`On ${day}, we open at ${open}`);
}

// optional chaining on methods
console.log(restaurant.order?.(0,1) ?? "Method does not exist");
console.log(restaurant.orderfocasio?.(0,1) ?? "Method does not exist");

// Arrays
// const users = [{name:'Jonas', email:'hello@jonas.io'}];
const users = [];
console.log(users[0]?.name ?? 'user array is empty');

//////////////////////// Destructuring Objects ///////////////
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2
// })
// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   startedIndex: 1,
// })

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags
//  } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// const {menu , starterMenu: starters = []} = restaurant;
// console.log(menu,starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14};
//  ({a,b} = obj);
//  console.log(a,b);

// // Nested Objects
// const {fri: {open, close}} = openingHours;
// // console.log(fri);
// console.log(open,close);


//////////////////////// Destructuring Arrays ////////////////
// const arr = [2,4,3];
// // without destructuring 
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// // with destructing 
// const [x,y,z] = arr;
// console.log(x,y,z);
// // Note :- destructing will not affect the original array
// console.log(arr);

// //This will give only 1st two elements of the array
// const [first, second] = restaurant.categories;
// console.log(first, second);

// // If we want to get only first  and third element from the array than we can write. Thid will skip the second element inside an array and get the third element of the array
// const [first1, ,second2] = restaurant.categories;
// console.log(first1, second2);

// // Note : we use destructuring to do lot of cool things. For example let say the owner of the restaurant decided to switch the first and second categories. Now the primary is italian and the secondary is vegetarian but now the owner wants to switch it.
// let [main, ,secondary] = restaurant.categories;
// console.log(main,secondary);
// // If we want to switch these two varibles without destructing than we have to do it like this:
// const temp = main; 
// main = secondary;
// secondary = temp;
// console.log(main,secondary);
// // But with destructing we can make it lot easier
// [main,secondary]=[secondary,main]
// console.log(main,secondary);


// // Another trick with the destructing is that we can have a function returning an array and than we can immediately destruct the results into diffrent variables. So this basically allow us to return multiple values from a function.

// const [starter, mainCourse] = restaurant.order(2,0);
// console.log(starter, mainCourse);

// // What happens if we have an nested array ?
// const nested =  [2, 4, [5,6]];
// const [i, ,j] = nested;
// console.log(i,j); // Output :- 2, [5,6] 

// //But what if we want every individual values ?. Well than, we have to do destructing inside a destructing 
// const [i1, , [j1,k1]] = nested; // This will do destructing inside destructing
// console.log(i1,j1,k1);  // output >- 2, 5, 6;

// // Another feature of destructing : you can also set default values for the variables when we are extracting them. It's gonna be very usefull in the case when we don't know the length of the array
// // without Default values
// const [p, q, r] = [8,9];
// console.log(p,q,r); // output : 8 9 undefined

// // with Default values
// const [p1 = 1, q1 = 1, r1 = 1] = [8,9];
// console.log(p1, q1, r1); // output :- 8 9 1


/////////////////////////...... Spread operator.........../////////////////////////

// const arr1= [7,8 ,9];
// const badArr = [1, 2, arr1[0], arr1[1], arr1[2]]; // without spread operator
// console.log(badArr);

// const newArr1 = [1,2,...arr1]
// console.log(newArr1);

// console.log(...newArr1);
// console.log(newArr1);

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// // copy 
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// //join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Iterables : arrays, strings , maps, sets but NOT Objects.
// const str = 'jonas';
// const letters = [...str, " ", "S."];
// console.log(letters);
// console.log(...str);

// // console.log(`${...str} Schmedtmann`); // This will give errors.

// const ingredients = [prompt("Let's make pasta! ingredient1?"), prompt("Let's make pasta! ingredient2?"), prompt("Let's make pasta! ingredient3?")];

// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// // spread operator with Objects

// const newRestaurant =  {foundIn : 1998,...restaurant, founder : 'Guiseppe'};
// console.log(newRestaurant);
// // using spread operator to make shallow copy of the object.
// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Ristoranate Roma';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

// ////////////........ Rest Pattern and Parameters ...........///////////////

// // SPREAD, because on RIGHT side of = (assignment operator).
// const arr2 = [1,2, ...[3,4]];

// // REST, because on LEFT side of = (assignmetn operator).
// const [a, b, ...others] = [1, 2, 4, 5, 2, 5, 6, 9, 10];
// console.log(a, b, others); 

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);

// // REST in objects

// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(sat, weekdays);

// // REST in functions

// const add = function(...numbers){
// console.log(numbers);
// }

// add(1, 3, 6);
// add(3, 7, 6, 4, 3);
// add(3, 6, 7, 8, 7 ,6, 3, 1);

// const x = [1, 3, 7];
// add(...x);

// restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');

// Short circuiting && and ||

console.log(`-----OR-----`);
console.log(3 || 'jonas');
console.log(''||'jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log(`-----AND-----`);
console.log(0 && 'Jonas');
console.log(7 && 'jonas');
console.log('Hello' && 23 && null && 'jonas');

if(restaurant.orderPizza){
  restaurant.orderPizza('mushroom', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom','spinach');

//////////-----NUllish coalescing operator-----//////////

// restaurant.numGuests = 0;
const guests =  restaurant.numGuests || 10;
console.log(guests);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);


//////////-------- Logical Assignment Operator --------///////////

const rest1 = {
  name: 'capri',
  // numGuests : 20,
  numGuests : 0,
};

const rest2 = {
  name: 'La Piazza',
  owner : 'Giovanni Rossi',
};

// setting default value of 10 in the object that does not have numGuests property

// OR assignment operator
// rest2.numGuests = rest2.numGuests || 10; // Less concise way.
// rest1.numGuests = rest1.numGuests || 10; // Less concise way.

rest2.numGuests ||= 10; // More concise way. 
rest1.numGuests ||= 10; // More concise way. 
console.log(rest1);
console.log(rest2);

// nullish assignment operator
rest2.numGuests ??= 10; 
rest1.numGuests ??= 10;
console.log(rest1);
console.log(rest2);

// && assignment operator
// rest1.owner = rest1.owner && '<Anonymous>';
// rest2.owner = rest2.owner && '<Anonymous>';
rest1.owner &&= '<Anonymous>';
rest2.owner &&= '<Anonymous>';

console.log(rest1);
console.log(rest2);


// Coding Challenge #1
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



const [players1, players2] = game.players;
console.log(players1,players2);
const [gk1, ...fieldPlayers1]  = players1;
console.log(gk1, fieldPlayers1);

const [gk2, ...fieldPlayers2]  = players2;
console.log(gk2, fieldPlayers2);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1,'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// const {team1, x, team2} = game.odds; //One way
const {odds: {team1, x: draw, team2}} = game;
console.log(team1,draw,team2);

game.printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
game.printGoals(...game.scored);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Lecture on for of loop
for(const item of menu){
  console.log(item);
}

for(const item of menu.entries()){
  console.log(item);
}

console.log([...menu.entries()]);

for(const [i, el] of menu.entries()){
  console.log(`${i + 1}: ${el}`);
}

console.log(restaurant);


// Property NAMES
const properties = Object.keys(openingHours1);
console.log(properties);

let openStr = `we are open on ${properties.length} days:`

for(const day of Object.keys(openingHours1)){
   openStr+= ` ${day}`
}
console.log(openStr);

// Property Values
const values = Object.values(openingHours1);
console.log(values);

// Entire Object
const entries = Object.entries(openingHours1);
console.log(entries);

for(const [key,{open,close}] of entries){
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// Lecture 116 SETS
const orderSet = new Set([
  'Pizza',
  'Rissoto',
  'Pizza',
  'Pasta',
  'Pizza',
  'Pizza',
  'Paneer',
])
console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has("Bread"));
console.log(new Set("Pritam"));
orderSet.add("Garlic bread");  // Adding value to the set
orderSet.add("Garlic bread");
orderSet.delete("Paneer"); // Removing value from the set
console.log(orderSet)
for(const order of orderSet){
  console.log(order);  // Looping over a set using for of loop
}
orderSet.clear(); // Clearing everything from the set
console.log(orderSet)

// Example of removing duplicates from an array.

const staff = ['Waiter','Manager','Waiter', 'Chef', 'Waiter', 'Chef'];
// const staffUnique = new Set(staff); // Converting an ARRAY to a Set.
const staffUnique = [...new Set(staff)]; // Converting a set to an Array.
console.log(staffUnique);

// Using a set to calculate how many unique items are there in an array
console.log(new Set(['Waiter','Manager','Waiter', 'Chef', 'Waiter', 'Chef']).size);
// Using a set to calculate how many unique letters are there in a string
console.log(new Set("jonasschmedtmann").size);

//Lecture 117

const rest = new Map(); // Easy way to create a map is to create an empty MAP.
rest.set('name','Classico Italiano');
rest.set(1,'Firanze, Italy');
rest.set(2,'Lisbon, Portugal'); // 1. Set method that we call on a MAP not only update the MAP but also returns the MAP.
//2. SET method actually returns the updated MAP allows us to chain the SET method.
rest.set('categories',['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open',11).set('close',23).set(true,'we are open :D').set(false,'we are closed :(');
console.log(rest);
console.log(rest.get('name'));
console.log(rest.get(true));

const time = 12;
console.log(rest.get(time>rest.get('open') && time<rest.get('close')));
console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear();

// Note :- we can use array and Objects as the MAP keys
let arr = [1,2];
rest.set(arr,"Test");
console.log(rest);
// To read value stores on an array we cannot do like this because they are not the same array stored in a heap. we have to store that array value in a common array and than we can use it as a key and than we can retrive value from that key of an Array. Note rewatch the lecture on MAPS and revisit the concept already done to have better idea.
console.log(rest.get(arr));

// we can also use Object as the key in a MAP.
rest.set(document.querySelector('h1'),'Heading');
console.log(rest);


// Lecture 118 MAPS iteration

const question = new Map([
  ['question','what is the best programming language in the world ?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javscript'],
  ['correct', 3],
  [true, 'Correct :D'],
  [false, 'Try Again :(']
])
console.log(question);

// Convert object to MAP
const hoursMap = new Map(Object.entries(openingHours1));
console.log(hoursMap);


// Quiz App
console.log(question.get('question'));
for(const [key,value] of question){
  if(typeof key === 'number'){
    console.log(`Answer ${key}: ${value}`);
  }
}
// const answer = Number(prompt('Your Answer'));
const answer = 3;
console.log(answer);
// console.log(answer === 3 ? question.get(true) : question.get(false));
console.log(question.get(question.get('correct') === answer));

// Convert MAP to an ARRAY
console.log([...question]);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);