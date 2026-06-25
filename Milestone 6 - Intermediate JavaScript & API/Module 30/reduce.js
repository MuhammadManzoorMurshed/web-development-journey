const someNumbers = [7, 14, 3, 21, 28, 5];

let sum = 0;
for (let i = 0; i < someNumbers.length; i++) {
    sum += someNumbers[i];
}
console.log("Sum using for loop:", sum);

console.log("----------------------------");

const totalSum = someNumbers.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log("Sum using reduce():", totalSum);

console.log("----------------------------");

const product = someNumbers.reduce((accumulator, currentValue) => accumulator * currentValue);
console.log("Product using reduce():", product);

console.log("----------------------------");

const maxNumber = someNumbers.reduce((max, current) => (current > max ? current : max));
console.log("Maximum number using reduce():", maxNumber);

console.log("----------------------------");

const minNumber = someNumbers.reduce((min, current) => (current < min ? current : min));
console.log("Minimum number using reduce():", minNumber);

console.log("----------------------------");