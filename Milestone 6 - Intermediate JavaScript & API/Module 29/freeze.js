const employees = {
    name: 'John Doe',
    designation: 'Software Engineer',
    salary: 75000,
    experience: '5 years',
    age: 30,
}

console.log('Before freeze:', employees);

delete employees.age; // Deleting age property
employees.salary = 80000; // Modifying salary property
console.log('After modification before freeze:', employees);

employees.location = 'Dhaka'; // Adding new property location
console.log('After adding location before freeze:', employees);

Object.freeze(employees); // Freezing the object

console.log('==========================');

delete employees.designation; // Attempting to delete designation property
employees.salary = 90000; // Attempting to modify salary property
employees.location = 'Chittagong'; // Attempting to modify location property
employees.age = 31; // Attempting to add age property again after freeze

console.log('After modification attempts post freeze:', employees);