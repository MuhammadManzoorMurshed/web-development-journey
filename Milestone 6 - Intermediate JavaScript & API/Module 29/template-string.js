/*
const poem = "Roses are red,
Violets are blue,
Sugar is sweet,
And so are you."; // This will cause a syntax error, becuase of the line breaks.
*/

const poem = "Roses are red,\nViolets are blue,\nSugar is sweet,\nAnd so are you."; // Using \n for line breaks in a regular string.
console.log(poem);

console.log('==========================');

const poem1 = `Roses are red,
Violets are blue,
Sugar is sweet,
And so are you.`; // Using backticks for template literals allows multi-line strings.

console.log(poem1);

console.log('==========================');

function sum(num1, num2) {
    const total = num1 + num2;
    // const output = 'The sum of ' + num1 + ' and ' + num2 + ' is ' + total; // Using concatenation
    const output = `The sum of ${num1} and ${num2} is ${total}`; // Using template literals

    console.log(output);
}

sum(5, 10); // The sum of 5 and 10 is 15

console.log('==========================');

const price = 50;
const discountedPrice = `The price of ${price} after 20% discount is $${(price * 0.8).toFixed(2)}`; // Using expression inside template literal
console.log(discountedPrice); // The price after 20% discount is $80.00

console.log('==========================');