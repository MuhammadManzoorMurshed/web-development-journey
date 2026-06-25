
const tax = 5000;
const eta = 5;

// This will cause an error because 'eta' is declared with 'const'
//eta = 6; 

let total = tax + eta;

total += 2000;
console.log("Total after addition:", total);

console.log("----------------------------");

const student = {
    name: "Alice",
    marks: 85,
    age: 20
};

const friends = ["Bob", "Charlie", "David"];

// Template literals
console.log(`My tax is ${tax} and marks are ${student.marks} and my friend is ${friends[1]}`);

console.log("----------------------------");

// Default parameters
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
} 

greet();
greet("Alice");

console.log("----------------------------");

const innerHTMLContent = `
    <div>
        <h1>Welcome to the Recap!</h1>
        h2>Hello, ${friends.length}</h2>
        <p>This is a sample paragraph.</p>
    </div>
`;

console.log(innerHTMLContent);

console.log("----------------------------");

// Arrow functions
const add = (a, b) => a + b;
console.log("Sum using arrow function:", add(10, 20));

const square = x => x * x;
console.log("Square using arrow function:", square(5));

console.log("----------------------------");

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log("Combined Array:", combinedArr);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = { ...obj1, ...obj2 };
console.log("Combined Object:", combinedObj);

console.log("----------------------------");

// Destructuring
const { name, marks } = student;
console.log(`Name: ${name}, Marks: ${marks}`);

const [firstFriend, secondFriend] = friends;
console.log(`First Friend: ${firstFriend}, Second Friend: ${secondFriend}`);

console.log("----------------------------");

