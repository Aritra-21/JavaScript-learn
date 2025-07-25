// array
// storing a collection of multiple items under a single variable name

// in js array is resizable 

const myArr = [0, 1, 2, "Aritra", true]
// console.log(myArr[3]);
// // Aritra

const myHeros = ["srk", "selmon vai"]

// Arr obj
const myArr2 = new Array(1, 2, 3, 4)
// Access elemenonsole.log(myArr2[1]);

// Arrays Methods
// Push -> Add values in Array

// myArr.push(6)
// myArr.push(7)
// myArr.push(8)
// console.log(myArr);
// // [ 0, 1, 2, 'Aritra', true, 6, 7, 8 ]

// pop -> remove last element of array
// myArr.pop()
// console.log(myArr);
// // [ 0, 1, 2, 'Aritra' ] 

// // unshift -> Add element to the first index of array

// myArr.unshift(9)
// console.log(myArr);
// // [ 9, 0, 1, 2, 'Aritra' ]

// // shift -> remove the first element of array which is present in index 1
// myArr.shift()
// console.log(myArr);
// // [ 0, 1, 2, 'Aritra' ]

// Question array that elemnt is exist or not O/P- Boolean
// console.log(myArr.includes(9));
// // false
// // [ 0, 1, 2, 'Aritra', true ]

// console.log(myArr.indexOf("Aritra"));
// // 3
// // [ 0, 1, 2, 'Aritra', true ]


// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// // 0,1,2,Aritra,true converted all values into string separated to comma

// console.log(typeof newArr);
// // string

// // console.log(typeof myArr);


// Slice, Splice

console.log("A", myArr);
// A [ 0, 1, 2, 'Aritra', true ]

const myn1 = myArr.slice(1, 3)

console.log(myn1);
// [ 1, 2 ] -> return the value between inede no. 1 and 3 it will return ind no. 1,2 

console.log("B ", myArr);
// B  [ 0, 1, 2, 'Aritra', true ] -> slice did not manipulate data

const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
// C  [ 0, true] -> Splice removed data of indx no. 1,2,3
console.log(myn2);
// [ 1, 2, 'Aritra']










