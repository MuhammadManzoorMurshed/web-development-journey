const employees = {
    name: 'John Doe',
    designation: 'Software Engineer',
    salary: 75000,
    experience: '5 years',
}

const keys = Object.keys(employees); // Get all keys of the object
console.log('Keys:', keys); // ['name', 'designation', 'salary', 'experience']

const values = Object.values(employees); // Get all values of the object
console.log('Values:', values); // ['John Doe', 'Software Engineer', 75000, '5 years']

const entries = Object.entries(employees); // Get all entries of the object
console.log('Entries:', entries); // [['name', 'John Doe'], ['designation', 'Software Engineer'], ['salary', 75000], ['experience', '5 years']]

console.log('==========================');