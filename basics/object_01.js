
const mySym = Symbol("key1")

const user1 = {
    name: "Ari",
    "Full name" : "Aritra Mondal",
    [mySym]: "myKey1",
    age: 18,
    city: "Kolkata",
    email: "aritra@chatgpt.com",
    isLoggedIn: false,
    lastLoginDays: ["Sunday", "Monday"]
}

user1.email = "ari@chatgpt.com"
// freeze object

Object.freeze(user1)

user1.email = "ari@copilot.com"


// don't use
// console.log(user1.name);

// use these
console.log(user1["Full name"]);

console.log(user1[mySym]);

console.log(mySym);

// console.log(user1.email);
console.log(user1["email"]);





 