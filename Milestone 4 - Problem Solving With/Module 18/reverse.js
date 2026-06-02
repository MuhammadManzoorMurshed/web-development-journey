const numbers = [1, 2, 3, 4, 5];

const reversedNumbers = [];
let j = 0;

for(let i = numbers.length - 1; i >= 0; i--) {
    reversedNumbers[j++] = numbers.at(i);
}

console.log(reversedNumbers);

console.log("=================================================");

const numbers1 = [10, 20, 30, 40, 50];

const reversedNumbers1 = [];

for (let i = 0; i < numbers1.length; i++) {
    reversedNumbers1.unshift(numbers1[i]);
}

console.log(reversedNumbers1);

console.log("=================================================");

const numbers2 = [100, 200, 300, 400, 500];

const reversedNumbers2 = [];
j = 0;

for (let i = numbers2.length - 1; i >= 0; i--) {
    reversedNumbers2.push(numbers2[i]);
}

console.log(reversedNumbers2);

console.log("=================================================");

const numbers3 = [1000, 2000, 3000, 4000, 5000];

const reversedNumbers3 = [];

for (const number of numbers3) {
    reversedNumbers3.unshift(number);
}

console.log(reversedNumbers3);

console.log("=================================================");

const numbers4 = [10000, 20000, 30000, 40000, 50000];

numbers4.reverse();

console.log(numbers4);

console.log("=================================================");

const numbers5 = [100000, 200000, 300000, 400000, 500000];

const result = numbers5.reverse();

console.log(result);