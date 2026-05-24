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

console.log(person.profession);

const income = person.salary;
console.log(income);

console.log("===========================");

console.log(person['age']);

const marritalStatus = person['married'];
console.log(marritalStatus);

console.log("===========================");

console.log(person['fav places']);