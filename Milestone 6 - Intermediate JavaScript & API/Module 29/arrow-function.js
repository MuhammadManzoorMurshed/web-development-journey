// Function Declaration
function add(num1, num2) {
    return num1 + num2;
}

// Function Expression
const addition = function(num1, num2) {
    return num1 + num2;
}

console.log(add(5, 10)); // 15

const result = addition(20, 30);
console.log(result); // 50

console.log('==========================');

// Arrow Function
const subtraction = (num1, num2) => {
    return num1 - num2;
} // Explicit return

const multiply = (num1, num2) => num1 * num2; // Implicit return

console.log(subtraction(50, 15)); // 35
console.log(multiply(6, 7)); // 42

console.log('==========================');

// Arrow Function with multiple parameters
const sumAll = (a, b, c, d, e, f) => a + b + c + d + e + f;

console.log(sumAll(1, 2, 3, 4, 5, 6)); // 21

console.log('==========================');

const isGreater = (x, y) => x > y;

console.log(isGreater(10, 5)); // true
console.log(isGreater(3, 7)); // false

console.log('==========================');

// Mutliline Arrow Function
const calculateArea = (length, width) => {
    const area = length * width;
    return area;
} // Explicit return

console.log(calculateArea(5, 10)); // 50

console.log('==========================');

// Arrow Function with no parameters
const greet = () => 'Hello, World!';

console.log(greet()); // Hello, World!

console.log('==========================');

// Arrow Function with console.log
const message = () => console.log('This is an arrow function with console.log');

message(); // This is an arrow function with console.log  