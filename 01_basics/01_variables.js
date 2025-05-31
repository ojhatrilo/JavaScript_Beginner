const account_Id = 144553;
let account_Email = "user1234@example.com"
var account_Password = "password123";
account_City = "jaipur"; // This will create a global variable

// account_Id = 2 // not allowed, as account_Id is a constant

// console.log("Account ID:", account_Id);

account_Email = "randomuser" + Math.floor(Math.random() * 10000) + "@example.com";
account_Password = "newpassword" + Math.floor(Math.random() * 1000);
account_City = "Delhi"; // This will update the global variable

let account_State;


// console.log("Account Email:", account_Email);
// console.log("Account Password:", account_Password);
// console.log("Account City:", account_City);

console.table([account_Id, account_Email, account_Password, account_City,account_State]);

/* 
Prefer not to use var in modern JavaScript, as it has function scope and can lead to unexpected behavior.
Use let for variables that will change and const for constants.
Use const for variables that should not change
*/

