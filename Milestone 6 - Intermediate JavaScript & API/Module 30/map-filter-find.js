const students = [
  {id: 1, name: 'Alice', age: 20, grade: 85 },
  {id: 2, name: 'Bob', age: 22, grade: 92 },
  {id: 3, name: 'Charlie', age: 23, grade: 78 },
  {id: 4, name: 'David', age: 21, grade: 88 },
];

const names = students.map(student => student.name);
console.log("Student Names:", names);

console.log("----------------------------");

const ages = students.map(student => student.age);
console.log("Student Ages:", ages);

console.log("----------------------------");

const grades = students.map(student => student.grade * 0.75);
console.log("Adjusted Grades (75%):", grades);

console.log("----------------------------");

const goodStudents = students.filter(student => student.grade >= 80);
console.log("Students with grade >= 80:", goodStudents);

console.log("----------------------------");

const firstGoodStudent = students.find(student => student.grade >= 80);
console.log("First student with grade >= 80:", firstGoodStudent);

console.log("----------------------------");