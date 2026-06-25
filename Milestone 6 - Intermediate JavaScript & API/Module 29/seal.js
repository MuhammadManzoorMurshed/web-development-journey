const employees = {
    name: 'John Doe',
    designation: 'Software Engineer',
    salary: 75000,
    experience: '5 years',
    age: 30,
}

console.log('Before sealing:', employees);

delete employees.age; // Deleting age property
employees.salary = 80000; // Modifying salary property
console.log('After modification before sealing:', employees);

employees.location = 'Dhaka'; // Adding new property location
console.log('After adding location before sealing:', employees);

Object.seal(employees); // Sealing the object

console.log('==========================');

delete employees.designation; // Attempting to delete designation property
employees.salary = 90000; // Attempting to modify salary property
employees.location = 'Chittagong'; // Attempting to modify location property
employees.age = 31; // Attempting to add age property again after sealing

console.log('After modification attempts post seal:', employees);