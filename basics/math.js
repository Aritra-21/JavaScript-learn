console.log(Math);
// Object [Math] {}

// Absolute value
// console.log(Math.abs(-4));
// // 4

// // round figure
// console.log(Math.round(4.65));
// // 5

// // select upper value
// console.log(Math.ceil(4.3));
// // 5

// // select lower value
// console.log(Math.floor(4.9));
// // 4

// // min value
// console.log(Math.min(4,3,7,5));
// // 3

// // max value
// console.log(Math.max(4,3,7,5));
// // 7

// Random value - always give random value between 0 and 1
// random value may be 0 or 1 also
console.log(Math.random());
// 0.31937226657268325 

// to get random value between 0 to 10 we can multiply with 10
// to avoid return 0 we can add 1 
console.log((Math.random()*10)+1);

//  Random number between Max to min

const min = 10;
const max = 20;

// Important formula
console.log(Math.floor(Math.random() * (max - min + min)));
// 14









