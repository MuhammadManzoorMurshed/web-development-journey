const number = '23';

if(typeof number == 'number') {
    console.log('Value is a number');
}
else {
    console.log('Value is not a number');
}

const number1 = 23;

if (typeof number1 == 'number') {
    console.log('Value is a number');
}
else {
    console.log('Value is not a number');
}

const numbers = [3, 12, 78, 90];
const student = {name: 'Rongila Rafsan', jog: 'Khawadwa kora'};

console.log(typeof numbers);
console.log(typeof student);
console.log(Array.isArray(numbers));
console.log(Array.isArray(student));
console.log(Array.isArray(number));

console.log();

console.log(isNaN(2));
console.log(isNaN('ABC'));
console.log(isNaN([]));
console.log(isNaN({}));
console.log(isNaN({}));