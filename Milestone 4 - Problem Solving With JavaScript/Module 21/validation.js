function multiply (num1, num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Please, provide a number.';
    } 
    const mult = num1 * num2;

    return mult;
}

const result = multiply('5', 7);
console.log(result);

function fullName(firstName, lastName) {
    if (typeof firstName !== 'string' || typeof lastName !== 'string') {
        return 'Please, provide a string.';
    } 
    const fullName = firstName + ' ' + lastName;

    return fullName;
}

const full = fullName('Rahan', 'Sohan');
console.log(full);

function getPrice(product) {
    if(typeof product !== 'object') {
        return 'Please, provide an object.';
    }

    const price = product.price;
    return price;
}

// const price = getPrice({name: 'Chulkanir Dandi', price: 35, color: 'blue'});
const price = getPrice(5);
console.log(price);

function getSecond(numbers) {
    if(Array.isArray(numbers)) {
        console.log('Please, provide an array.');
    }
    const second = numbers[1];
    return second;
}

// const second = getSecond([1, 25, 69]);
const second = getSecond(69);
console.log(second);