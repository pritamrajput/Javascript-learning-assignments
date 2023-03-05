'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(startIndex, mainIndex){
    return [this.starterMenu[startIndex],this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
   
  // Practical application of desctructing objects 
  orderDelivery: function({starterIndex = 1,mainIndex = 0,time = '20:00',address}){
   console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delvered to ${address} at ${time}`);
  },

  // Order pasta 
  orderPasta: function(ing1, ing2, ing3){
   console.log(`This is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`); 
  },

  // Order Pizza
   orderPizza: function(mainIngradient, ...otherIngredient){
     console.log(mainIngradient);
     console.log(otherIngredient);
   }
};

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

const arr1= [7,8 ,9];
const badArr = [1, 2, arr1[0], arr1[1], arr1[2]]; // without spread operator
console.log(badArr);

const newArr1 = [1,2,...arr1]
console.log(newArr1);

console.log(...newArr1);
console.log(newArr1);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// copy 
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables : arrays, strings , maps, sets but NOT Objects.
const str = 'jonas';
const letters = [...str, " ", "S."];
console.log(letters);
console.log(...str);

// console.log(`${...str} Schmedtmann`); // This will give errors.

const ingredients = [prompt("Let's make pasta! ingredient1?"), prompt("Let's make pasta! ingredient2?"), prompt("Let's make pasta! ingredient3?")];

console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// spread operator with Objects

const newRestaurant =  {foundIn : 1998,...restaurant, founder : 'Guiseppe'};
console.log(newRestaurant);
// using spread operator to make shallow copy of the object.
const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristoranate Roma';
console.log(restaurant.name);
console.log(restaurantCopy.name);

////////////........ Rest Pattern and Parameters ...........///////////////

// SPREAD, because on RIGHT side of = (assignment operator).
const arr2 = [1,2, ...[3,4]];

// REST, because on LEFT side of = (assignmetn operator).
const [a, b, ...others] = [1, 2, 4, 5, 2, 5, 6, 9, 10];
console.log(a, b, others); 

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

// REST in objects

const {sat, ...weekdays} = restaurant.openingHours;
console.log(sat, weekdays);

// REST in functions

const add = function(...numbers){
console.log(numbers);
}

add(1, 3, 6);
add(3, 7, 6, 4, 3);
add(3, 6, 7, 8, 7 ,6, 3, 1);

const x = [1, 3, 7];
add(...x);

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');