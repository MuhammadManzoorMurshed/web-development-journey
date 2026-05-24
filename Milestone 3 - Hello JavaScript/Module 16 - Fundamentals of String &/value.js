const person = {
    name: "Sadaruddin",
    age: 25,
    profession: "Developer",
    salary: 25000,
    married: true,
    'fav places': ['Bandarban', 'Saintmartin', 'Kuakata']
}

console.log(person);

console.log("===========================");

person.salary = 3000;
console.log(person);

console.log("===========================");

person['age'] = 60;
console.log(person);

console.log("===========================");

person['fav places'] = ['Maldives', 'Bali', 'Singapore'];
console.log(person);

console.log("===========================");

const keyName = 'profession';
console.log(person[keyName]);

console.log("===========================");

const propName = 'profession';
person[propName] = 'DevOps';
console.log(person);