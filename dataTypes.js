
// -> NUMBER
let age = 24;
console.log(age);
console.log(typeof(age));

console.log("---------------");

// -> STRING
let name = "renuka";
console.log(name);
console.log(typeof(name));

// -> BOOLEAN
let isFollow = true;
console.log(isFollow);
console.log(typeof(isFollow));

console.log("---------------");

// -> UNDEFINED
let x ;
console.log(x);
console.log(typeof(x));

console.log("---------------");

// -> NULL
let a = null;
console.log(a);
console.log(typeof(a));

console.log("---------------");

// -> BIGINT
let number = BigInt("24");
console.log(number);
console.log(typeof(number));

console.log("---------------");

// -> SYMBOL
let symbol = Symbol("HELLO!");
console.log(symbol);
console.log(typeof(symbol));

console.log("---------------");

// ->OBJECTS

const student = {
    fullName : "Renuka Chaudhary", // Key : fullname , Value : Renuka
    age : 20,
    cgpa : 8.8,
    isPass : true
};
console.log(student);
console.log(typeof(student));

console.log("---------------");

// -> accessing key 
console.log(student.age);
console.log(student["cgpa"]);


console.log("---------------");

// -> UPDATION OF VALUE

student["age"] = student["age"] + 1;
console.log(student.age);


console.log("---------------");

student["fullName"] = "Ruu";
console.log(student.fullName);


// CONST OBJ KEY CAN BE UPDATED BUT CONST VARIABLE CANNT BE UPDATED