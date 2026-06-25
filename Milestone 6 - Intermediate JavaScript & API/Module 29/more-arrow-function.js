const getTax = (amount, taxRate) => amount * taxRate / 100;

console.log(getTax(100, 15)); // 15

console.log('==========================');

// Arrow Function with single parameter
const square = (num) => num * num;
const getHalf = num => num / 2;

console.log(square(7)); // 49
console.log(getHalf(20)); // 10

console.log('==========================');

// Arrow function with no parameters
const getCurentYear = () => new Date().getFullYear();
console.log(getCurentYear()); // Current Year

console.log('==========================');

// Get first element of an array
const getFirstelement = arr => arr[0];

console.log(getFirstelement([10, 20, 30, 40])); // 10

console.log('==========================');

// Anonymous Function inside setTimeout
setTimeout(
    () => console.log('This message is displayed after 2 seconds'),
    2000
)