const randomNumbers = [34, 7, 23, 32, 5, 62, 32, 14, 78, 1];

const firstEven = randomNumbers.find(num => num % 2 === 0);
console.log("First even number found:", firstEven);

console.log("----------------------------");

const firstGreaterThan50 = randomNumbers.find(num => num > 50);
console.log("First number greater than 50 found:", firstGreaterThan50);

console.log("----------------------------");

const firstLessThan10 = randomNumbers.find(num => num < 10);
console.log("First number less than 10 found:", firstLessThan10);

console.log("----------------------------");

const firstMultipleOf7 = randomNumbers.find(num => num % 7 === 0);
console.log("First multiple of 7 found:", firstMultipleOf7);