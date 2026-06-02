const numbers = [1, 2, 43, 54, 4];
const players = [{}, {}, {}];
const employees = [
    {name: 'Ashik', designation: 'Content Writer', salary: 25000},
    {name: 'Rashik', designation: 'Developer', salary: 29000},
    {name: 'Abdur Rahim', designation: 'Digital Marketer', salary: 21000}
]

console.log(employees);

console.log("=================================================");

console.log(employees[0]);
console.log(employees[1]);
console.log(employees[2]);

console.log("=================================================");

console.log(employees[0].name);
console.log(employees[1].designation);
console.log(employees[2].salary);

console.log("=================================================");

for(const employee of employees) {
    console.log(employee);
    console.log(employee.salary);
}

console.log("=================================================");

for(const emp of employees) {
    const person = emp;
    const personInfo = person.name + ': ' + person.salary;

    console.log(personInfo);
}

console.log("=================================================");

employees[0].name = "Manzoor Murshed";

for (const employee of employees) {
    console.log(employee);
}