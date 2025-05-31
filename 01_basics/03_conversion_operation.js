let score = 33

let score1 = "33abc"

//console.log(typeof score);

// let valueInnumber = Number(score)
// console.log(typeof valueInnumber);


let valueInnumber1 = Number(score1)
console.log(typeof valueInnumber1);


// 33 is converted to number
// "33abc" is converted to NaN (Not a Number) because it contains non-numeric characters
// console.log(valueInnumber1); // This will log NaN to the console
// console.log(isNaN(valueInnumber1)); // This will log true, indicating that valueInnumber1 is not a valid number
// true => 1; false => 0


let isLoggedIn = "";
let isLoggedInNumber = Boolean(isLoggedIn);
console.log(isLoggedInNumber); // This will log true, as isLoggedIn is already a boolean value


// Converting a string to a boolean
// 1 => true; 0 => false
// "" (empty string) is considered false
// "0" (string with zero) is considered true

let somenumber = 0;
let strnumber = String(somenumber);
console.log( typeof strnumber); // This will log "string", as the number has been converted to a string