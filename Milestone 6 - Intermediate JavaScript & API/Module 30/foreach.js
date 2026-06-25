const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(num => num * num);
console.log("Squared Numbers:", squareNumbers);

console.log("----------------------------");

numbers.forEach(num => {
    console.log(num);
});

numbers.forEach((num, index) => {
    console.log(`Index: ${index}, Number: ${num}`);
})

numbers.forEach((num, index, arr) => {
    console.log(`Index: ${index}, Number: ${num}, Array: ${arr}`);
})

numbers.forEach(num => {
    const squared = num * num;
    console.log(`Number: ${num}, Squared: ${squared}`);
});

console.log("----------------------------");