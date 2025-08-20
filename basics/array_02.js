const bengal_heros = ["Dev", "jeet", "Jisu"]
const hindi_heros = ["SRK", "Bhaijaan", "Amir"]

// bengal_heros.push(hindi_heros)

// console.log(bengal_heros); 

// console.log(bengal_heros[3][1]);

// Concatination of two arrays

// const all_heros = bengal_heros.concat(hindi_heros)
// console.log(all_heros);

// easy way (use spread operator)

// const all_new_heros = [...bengal_heros, ...hindi_heros]
// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// convert strings to array

// console.log(Array.from("Aritra"));
// console.log(Array.from({name: "Aritra"})); // retutn empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));






