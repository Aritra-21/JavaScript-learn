// old declaration of String

const name = "Aritra-Mondal-99-24"
const repoNumber = 7

// console.log(name + repoNumber + " Value")
// Aritra7 Value

// Mordern syntax to write string -> String interpolation using (` `) - backtick
// console.log(`My name is ${name} and My repo count is ${repoNumber}`);
// My name is Aritra and My repo count is 7

// declare string obj

const gameName = new String(name)

// console.log(gameName);
// [String: 'Aritra']


// Access element

// console.log(gameName[0]);
// console.log(gameName.toLowerCase());
// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0,4)
// console.log(newString);

// const anotherString = gameName.slice(-6, 0)
// console.log(anotherString);

// const newStringOne = "    Aritra     "
// console.log(newStringOne);
// //     Aritra     
// console.log(newStringOne.trim());
// // Aritra

// const url = "https://aritra.com/aritra%20mondal"

// I wnt to replace %20 to _

// console.log(url.replace('%20', '_'));
// // https://aritra.com/aritra_mondal

// // Is Aritra Availabel in the String?

// console.log(url.includes('aritra'));
// // true

// Split the string of name variable based on '-' also convert into array

// console.log(name.split('-'));
// // [ 'Aritra', 'Mondal', '99', '24' ]











