// let score = 33

// let score1 = "33abc"

// //console.log(typeof score);

// // let valueInnumber = Number(score)
// // console.log(typeof valueInnumber);


// let valueInnumber1 = Number(score1)
// console.log(typeof valueInnumber1);


// // 33 is converted to number
// // "33abc" is converted to NaN (Not a Number) because it contains non-numeric characters
// // console.log(valueInnumber1); // This will log NaN to the console
// // console.log(isNaN(valueInnumber1)); // This will log true, indicating that valueInnumber1 is not a valid number
// // true => 1; false => 0


// let isLoggedIn = "";
// let isLoggedInNumber = Boolean(isLoggedIn);
// console.log(isLoggedInNumber); // This will log true, as isLoggedIn is already a boolean value


// // Converting a string to a boolean
// // 1 => true; 0 => false
// // "" (empty string) is considered false
// // "0" (string with zero) is considered true

// let somenumber = 0;
// let strnumber = String(somenumber);
// console.log( typeof strnumber); // This will log "string", as the number has been converted to a string


// ************************************************ Operations ******************************************************
let num1 = 10;
let negNum1 = -num1
console.log(negNum1); // This will log -10, as the negation operator converts num1 to its negative value

console.log("1"+23);
console.log(23+"1"); // This will log "231", as the addition operator concatenates the string "1" with the number 23, resulting in a string
console.log("1"+"1")
console.log(2+2+"3"); // This will log "43", as the addition operator first adds 2 + 2 to get 4, and then concatenates it with the string "3"


console.log((3+5)*2%2)

let gameScore = 100;
++gameScore
console.log(gameScore); // This will log 101, as the increment operator increases gameScore by 1


// Comparison operations
console.log(2 > 1);      // true
console.log(2 >= 1);     // true
console.log(2 < 1);      // false
console.log(2 == 1);     // false
console.log(2 != 1);     // true

// Comparing different types
console.log("2" == 2);   // true (loose equality, type coercion)
console.log("2" === 2);  // false (strict equality, no type coercion)
console.log(null == undefined); // true
console.log(null === undefined); // false