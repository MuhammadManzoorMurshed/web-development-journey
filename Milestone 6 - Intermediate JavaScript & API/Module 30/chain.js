const student = {
    name: "Alice",
    marks: 85,
    age: 20,
};

console.log(student.name);        // Accessing property using dot notation
console.log(student["marks"]);    // Accessing property using bracket notation
console.log(student.age);         // Accessing property using dot notation

console.log("----------------------------");

const student1 = {
    name: "Alice",
    marks: 85,
    age: 20,
    'family-details': {
        father: "Bob",
        mother: "Carol",
        sibligns: {
            elder: "David",
            younger: "Eva"
        }
    }
};


console.log(student1['family-details']);
console.log(student1['family-details'].father);
console.log(student1['family-details'].sibligns.elder);

console.log("----------------------------");

// Optional chaining
const student2 = {
    name: "Alice",
    marks: 85,
    age: 20,
    // 'family-details' property is missing
};

console.log(student2['family-details']?.father); // Undefined, no error
console.log(student2['family-details']?.sibligns?.elder); // Undefined, no error
