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
};

const arr = [2,4,3];
// without destructuring 
const a = arr[0];
const b = arr[1];
const c = arr[2];

// with destructing 
const [x,y,z] = arr;
console.log(x,y,z);
// Note :- destructing will not affect the original array
console.log(arr);

//This will give only 1st two elements of the array
const [first, second] = restaurant.categories;
console.log(first, second);

// If we want to get only first  and third element from the array than we can write. Thid will skip the second element inside an array and get the third element of the array
const [first1, ,second2] = restaurant.categories;
console.log(first1, second2);

// Note : we use destructuring to do lot of cool things. For example let say the owner of the restaurant decided to switch the first and second categories. Now the primary is italian and the secondary is vegetarian but now the owner wants to switch it.
let [main, ,secondary] = restaurant.categories;
console.log(main,secondary);
// If we want to switch these two varibles without destructing than we have to do it like this:
const temp = main; 
main = secondary;
secondary = temp;
console.log(main,secondary);
// But with destructing we can make it lot easier
[main,secondary]=[secondary,main]
console.log(main,secondary);


// Another trick with the destructing is that we can have a function returning an array and than we can immediately destruct the results into diffrent variables. So this basically allow us to return multiple values from a function.

const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse);

// What happens if we have an nested array ?
const nested =  [2, 4, [5,6]];
const [i, ,j] = nested;
console.log(i,j); // Output :- 2, [5,6] 

//But what if we want every individual values ?. Well than, we have to do destructing inside a destructing 
const [i1, , [j1,k1]] = nested; // This will do destructing inside destructing
console.log(i1,j1,k1);  // output >- 2, 5, 6;

// Another feature of destructing : you can also set default values for the variables when we are extracting them. It's gonna be very usefull in the case when we don't know the length of the array
// without Default values
const [p, q, r] = [8,9];
console.log(p,q,r); // output : 8 9 undefined

// with Default values
const [p1 = 1, q1 = 1, r1 = 1] = [8,9];
console.log(p1, q1, r1); // output :- 8 9 1