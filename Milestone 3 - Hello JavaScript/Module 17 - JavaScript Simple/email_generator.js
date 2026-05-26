var student = { name: "jhankar", roll: 1014, department: "cse" };

const email = student.name + student.roll + "." + student.department + "@ph.ac.bd";

console.log(email);

console.log("=========================");

var student1 = { name: "monu", roll: 99, department: "eee" };

const email1 = `${student1.name}${student1.roll}.${student1.department}@ph.ac.bd`;

console.log(email1);

console.log("=========================");

var student2 = { name: "mewo", roll: 96, department: "cse" };

const email2 = [student2.name, student2.roll, '.', student2.department, '@ph.ac.bd'].join('');

console.log(email2);

console.log("=========================");

var student3 = { name: "manzoor", roll: 96, department: "cse" };

const email3 = [student3.name + student3.roll, student2.department + '@ph.ac.bd'].join('.');

console.log(email3);