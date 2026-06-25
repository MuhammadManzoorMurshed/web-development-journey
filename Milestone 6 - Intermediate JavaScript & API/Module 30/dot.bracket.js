const student = {
    name: "Alice",
    marks: 85,
    age: 20
};

const studentName = student.name;
const studentMarks = student.marks;
const studentAge = student.age;

console.log("Student Name:", studentName);
console.log("Student Marks:", studentMarks);
console.log("Student Age:", studentAge);

console.log("----------------------------");

const student1 = {
    name: "Alice Bob",
    marks: 90,
    age: 30,
    1: "one",
    2: "two",
    'home-address': "123 Main St"
};

// This will cause a syntax error, because dot notation cannot be used with numeric keys
//console.log(student1.1);

// This will cause an error due to the hyphen in the property name
//console.log("Student1 Home Address:", student1.home-address);

const name1 = student1["name"];
const marks1 = student1["marks"];
const age1 = student1["age"];
const one = student1['1'];
const two = student1[2];
const homeAddress = student1['home-address'];

console.log("Student1 Name:", name1);
console.log("Student1 Marks:", marks1);
console.log("Student1 Age:", age1);
console.log("Student1 One:", one);
console.log("Student1 Two:", two);
console.log("Student1 Home Address:", homeAddress);

console.log("----------------------------");

for(const key in student1) {
    console.log(`Key: ${key}, Value: ${student1[key]}`);
}