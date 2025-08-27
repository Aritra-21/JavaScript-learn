// Creating new blank objects

// singletone obj

// const facebookUser = new Object()

// nonsingletone object
const facebookUser = {}

facebookUser.id = "123"
facebookUser.name ="Ram"
facebookUser.isLoggedIn = false

// console.log(facebookUser);


// nested obj
const regularUser = {
    email: "some@gmail.com",
    fullName: {
        firstName: "Aritra",
        lastName: "Mondal"

    }

}

// console.log(regularUser.fullName.firstName);

// Combine 2 objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3:"a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}  
// ans { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }


// use object.assign
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// all value wii be combined in blank obj
// obj1,2,4 are source and {}is target 


// console.log(obj3);

// mostly use spread operator
const obj3 = {...obj1, ...obj2, ...obj4}

console.log(obj3);


// when we get data from DB it is come as array of objs

const user = [
    {
        id:1,
        email: "a@gmail.com"
    },
    {
        id:1,
        email: "a@gmail.com"
    },
    {
        id:1,
        email: "a@gmail.com"
    },
    {
        id:1,
        email: "a@gmail.com"
    },
]



console.log(user[1]);

console.log(facebookUser);
console.log(Object.keys(facebookUser));
console.log(Object.values(facebookUser));
console.log(Object.entries(facebookUser));


// is there 'isLoggedIn' property present in facebookUser obj -> return bool value
console.log(facebookUser.hasOwnProperty('isLoggedIn')); 



