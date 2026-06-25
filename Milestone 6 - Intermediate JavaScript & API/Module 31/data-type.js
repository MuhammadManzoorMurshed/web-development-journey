/**
 * This script demonstrates the various data types in JavaScript
 * and how to check their types using the `typeof` operator.
 * It also includes additional checks for specific types like arrays and null.
 * 
 * JavaScript is a dynamically typed language, meaning variables can hold values of any type and types are determined at runtime.
 * 
 * Types of data type:
 * 1. Premitive Data Types: are copied by their value.
 *   - Number
 *   - String
 *   - Boolean
 *   - Undefined
 *   - Null
 *   - Symbol
 *   - BigInt
 * 
 * 2. Non-Primitive Data Types: are copied by their reference.
 *   - Object
 *   - Array
 *   - Function
 * 
 * 3. Special Cases:
 *   - null (typeof returns "object")
 *   - Array (typeof returns "object", use Array.isArray() to check)
 *   - Function (typeof returns "function")
 * 
 * 4. Additional Checks:
 *   - Use strict equality (===) to check for null
 *   - Use Array.isArray() to check for arrays
 *   - Use typeof to check for functions
 * 
 * Summary:
 * This script covers all the fundamental data types in JavaScript,
 * including both primitive and non-primitive types, along with special cases
 * and additional checks to accurately identify each type.
 * 
 */


let data = 4;
console.log(typeof data); // Output: "number"

data = "Hello, World!";
console.log(typeof data); // Output: "string"

data = true;
console.log(typeof data); // Output: "boolean"

data = { name: "Alice", age: 30 };
console.log(typeof data); // Output: "object"

data = [1, 2, 3];
console.log(typeof data); // Output: "object"

data = function() { return "Hello"; };
console.log(typeof data); // Output: "function"

data = undefined;
console.log(typeof data); // Output: "undefined"

data = null;
console.log(typeof data); // Output: "object"

data = Symbol("id");
console.log(typeof data); // Output: "symbol"

data = BigInt(9007199254740991);
console.log(typeof data); // Output: "bigint"

console.log("-------------------------------");

// Additional check for array type
data = [1, 2, 3];
console.log(Array.isArray(data)); // Output: true

// Additional check for null type
data = null;
console.log(data === null); // Output: true

// Additional check for function type
data = function() { return "Hello"; };
console.log(typeof data === "function"); // Output: true

// Additional check for object type
data = { name: "Alice", age: 30 };
console.log(typeof data === "object" && data !== null && !Array.isArray(data)); // Output: true

data = 42;
console.log(typeof data === "number"); // Output: true

data = "Hello";
console.log(typeof data === "string"); // Output: true

data = false;
console.log(typeof data === "boolean"); // Output: true

data = undefined;
console.log(typeof data === "undefined"); // Output: true

data = Symbol("id");
console.log(typeof data === "symbol"); // Output: true

data = BigInt(12345678901234567890);
console.log(typeof data === "bigint"); // Output: true

console.log("-------------------------------");

// Summary of data types
const dataTypes = [
    "number",
    "string",
    "boolean",
    "object",
    "array",
    "function",
    "undefined",
    "null",
    "symbol",
    "bigint"
];

console.log("Supported data types in JavaScript:", dataTypes);