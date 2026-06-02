const numbers = [6, 1, 8, 2, 3, 5];

console.log(numbers);
numbers.sort();
console.log(numbers);

console.log("=================================================");

const friends = ['Sakib', 'Rakib', 'Takib', 'Akib', 'Nakib'];

console.log(friends);
friends.sort();
console.log(friends);

console.log("=================================================");

const ages = [1, 5, 100, 15, 8, 2, 28];

console.log(ages);
ages.sort();
console.log(ages);

console.log("=================================================");

const sorted_ages = ages.sort(function(a, b) {return a - b});
console.log(sorted_ages);

console.log("=================================================");

const sorted_ages_desc = ages.sort(function (a, b) { return b - a });
console.log(sorted_ages_desc);