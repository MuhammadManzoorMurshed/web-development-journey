const name = "Bangladesh";

// This will throw an error because 'name' is a constant
// name = "India"; 

const countryName = "USA" + name;
console.log(countryName);

console.log('==========================');

let age = 25;
age = 26; // This is valid because 'age' is declared with 'let'
console.log(age);

console.log('==========================');

var city = "New York";
city = "Los Angeles"; // This is valid because 'city' is declared with 'var'
console.log(city);

console.log('==========================');

{
    let blockScoped = "I am inside a block";
    console.log(blockScoped);
}
// console.log(blockScoped); // This will throw an error because 'blockScoped' is not accessible outside the block

// Demonstrating var scope
{
    var functionScoped = "I am function scoped";
    console.log(functionScoped);
}
console.log(functionScoped); // This will work because 'functionScoped' is accessible outside the block

console.log('==========================');

const pi = 3.14;
console.log("Value of pi:", pi);
// pi = 3.14159; // This will throw an error because 'pi' is a constant

// Demonstrating that const objects can have their properties changed
const person = {
    name: "Alice",
    age: 30
};
person.age = 31; // This is valid
console.log(person);

// person = { name: "Bob", age: 25 }; // This will throw an error because we cannot reassign a const variable

console.log('==========================');

// Demonstrating that const arrays can have their properties changed
const numbers = [1, 2, 3];
numbers.push(4); // This is valid
console.log(numbers);

// numbers = [5, 6, 7]; // This will throw an error because we cannot reassign a const variable

// Demonstrating temporal dead zone with let
// console.log(temp); // This will throw an error because 'temp' is not defined yet
let temp = "I am defined now";
console.log(temp);

console.log('==========================');

// Demonstrating hoisting with var
console.log(hoistedVar); // This will log 'undefined' because of hoisting
var hoistedVar = "I am hoisted";
console.log(hoistedVar);

console.log('==========================');

// Demonstrating hoisting with let
// console.log(hoistedLet); // This will throw an error because 'hoistedLet' is not defined yet
let hoistedLet = "I am not hoisted";
console.log(hoistedLet);

console.log('==========================');

// Demonstrating hoisting with const
// console.log(hoistedConst); // This will throw an error because 'hoistedConst' is not defined yet
const hoistedConst = "I am not hoisted";
console.log(hoistedConst);

// Summary of differences
// 1. 'const' cannot be reassigned, 'let' can be reassigned, 'var' can be reassigned.
// 2. 'let' and 'const' are block-scoped, 'var' is function-scoped.
// 3. 'let' and 'const' are not hoisted in the same way as 'var'. 