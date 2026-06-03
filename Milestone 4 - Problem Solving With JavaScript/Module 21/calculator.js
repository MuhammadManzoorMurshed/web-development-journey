function add(num1, num2) {
    return num1 + num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function calculator(a, b, operator) {
    if(operator == 'add') {
        const result = add(a, b);

        return result;
    }
    else if (operator == 'subtract') {
        const result = substract(a, b);

        return result;
    }
    else if (operator == 'multiply') {
        const result = multiply(a, b);

        return result;
    }
    else if (operator == 'divide') {
        const result = divide(a, b);

        return result;
    }
    else {
        return 'Only add, substract, multiply, and divide operations are allowed.'
    }
}

const result = calculator(5, 7, 'divide');
console.log(result);