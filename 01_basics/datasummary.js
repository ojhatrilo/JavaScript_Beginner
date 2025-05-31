// Primitive data types in JavaScript

// 7 types of primitive data types in JavaScript
let primitiveTypes = [
    "string", // Represents text data
    "number", // Represents numeric data
    "boolean", // Represents true or false values
    "null", // Represents an intentional absence of any object value
    "undefined", // Represents a variable that has been declared but not assigned a value
    "bigint", // Represents integers with arbitrary precision
    "symbol" // Represents a unique and immutable value, often used as object property keys
];
// Displaying the primitive data types in a table format
// console.table(primitiveTypes);

// Non-primitive data types in JavaScript
let nonPrimitiveTypes = [
    "object", // Represents a collection of key-value pairs
    "array", // A special type of object that holds an ordered list of values
    "function" // A block of code designed to perform a particular task
];
// Displaying the non-primitive data types in a table format
// console.table(nonPrimitiveTypes);
// Displaying the complete list of data types in JavaScript
let allDataTypes = [
    ...primitiveTypes,
    ...nonPrimitiveTypes
];
// console.table(allDataTypes);




const id  = Symbol(144553);
const anotherId = Symbol(144553);

console.log(id === anotherId); // This will log false, as each Symbol is unique, even if they have the same description

console.log(id); // This will log the Symbol with its description, e.g., Symbol(144553)
console.log(anotherId); // This will log another unique Symbol with the same description, e.g., Symbol(144553)
