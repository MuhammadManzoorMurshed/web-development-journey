const numbers = [1, 2, 3, 4, 5];

const double = [];

for(let i = 0; i < numbers.length; i++) {
    double.push(numbers[i] * 2);
}

console.log("Doubled using for loop:", double);

console.log("----------------------------");

const numbers1 = [1, 2, 3, 4, 5];

// const doubleIt = num => num * 2;
// const doubledWithMap = numbers1.map(doubleIt);

const doubledWithMap = numbers1.map(num => num * 2);
console.log("Doubled using map():", doubledWithMap);

console.log("----------------------------");

const fiveTimes = numbers.map(num => num * 5);
console.log("Five times using map():", fiveTimes);

console.log("----------------------------");

const squares = numbers.map(num => num * num);
console.log("Squares using map():", squares);

console.log("----------------------------");

const friends = ["Bob", "Charlie", "David", "Eva", "Frank"];

const nameLengths = friends.map(friend => friend.length);
console.log("Name lengths using map():", nameLengths);

console.log("----------------------------");

const firstLetters = friends.map(friend => friend[0]);
console.log("First letters using map():", firstLetters);

console.log("----------------------------");

const upperCaseNames = friends.map(friend => friend.toUpperCase());
console.log("Uppercase names using map():", upperCaseNames);

console.log("----------------------------");

const result = numbers.map((num, index) => {
    console.log(num);
    console.log();
    console.log(index);
})