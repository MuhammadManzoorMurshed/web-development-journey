const numbers = [10, 20, 30, 40, 50];

console.log(numbers);
console.log(...numbers); // Using spread operator to log individual elements

console.log('==========================');

const max = Math.max(21, 45, 78, 12, 34);
console.log(max); // 78

const maxFromArray = Math.max(numbers); // Incorrect usage, will return NaN
console.log(maxFromArray); // NaN

const maxFromArrayCorrect = Math.max(...numbers);
console.log(maxFromArrayCorrect); // 50

console.log('==========================');

// Copying an array
const array1 = [1, 2, 3];
const array2 = array1; // Reference copy
array1.push(4);
console.log('array1:', array1);
console.log('array2:', array2); // array2 is affected by changes in array1

const array3 = [...array1]; // Shallow copy using spread operator
array1.push(5);
console.log('array1:', array1);
console.log('array3:', array3); // array3 is not affected by changes in array1

const array4 = [...array1, 6, 7, 8]; // Creating a new array with additional elements
console.log('array4:', array4);

const array5 = [0, ...array1, 9]; // Combining arrays
console.log('array5:', array5);

console.log('==========================');

// Merging arrays
const arrA = [1, 2, 3];
const arrB = [4, 5, 6];
const mergedArray = [...arrA, ...arrB];
console.log('mergedArray:', mergedArray);

const mergedArrayWithExtras = [0, ...arrA, ...arrB, 7, 8, 9];
console.log('mergedArrayWithExtras:', mergedArrayWithExtras);

console.log('==========================');

// Spread operator with objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log('mergedObj:', mergedObj);

const obj3 = { ...obj1, b: 20, e: 5 }; // Overriding property b and adding new property e
console.log('obj3:', obj3);

console.log('==========================');

// Function arguments using spread operator
function add(x, y, z) {
    return x + y + z;
}

const nums = [10, 20, 30];
const sumResult = add(...nums); // Spreading array elements as function arguments
console.log('sumResult:', sumResult); // 60