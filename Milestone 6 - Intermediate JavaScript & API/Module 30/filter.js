const numbers = [1, 2, 30, 4, 50, 6, 7, 80, 9, 10];

const filteredNumbers = numbers.filter(num => num > 10);
console.log("Numbers greater than 10:", filteredNumbers);

console.log("----------------------------");

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

console.log("----------------------------");

const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Odd Numbers:", oddNumbers);

console.log("----------------------------");

const lessThanTwenty = numbers.filter(num => num < 20);
console.log("Numbers less than 20:", lessThanTwenty);