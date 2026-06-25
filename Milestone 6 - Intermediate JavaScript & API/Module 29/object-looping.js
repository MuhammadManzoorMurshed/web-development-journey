const numbers = [21, 45, 78, 12, 34, 50];

for(const number of numbers) {
    console.log(number);
}

const person = {
    name: 'Alice',
    designation: 'Developer',
    salary: 90000,
    experience: '4 years',
    age: 28,
    city: 'Dhaka',
};

for(const key in person) {
    console.log(key + ": " + person[key]);
}

console.log('==========================');

const keys = Object.keys(person);
console.log('Keys:', keys);

const values = Object.values(person);
console.log('Values:', values);

const entries = Object.entries(person);
console.log('Entries:', entries);

console.log('==========================');

for(const key of keys) {
    console.log(key + ": " + person[key]);
}