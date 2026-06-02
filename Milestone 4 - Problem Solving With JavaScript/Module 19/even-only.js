function evenNumbersOnly(numbers) {
    let evens = [];
    for(const number of numbers) {
        if(number % 2 == 0) {
            console.log(number);
            evens.push(number);
        }
    }

    return evens;
}

const numbers = [5, 8, 91, 24, 6];
const evens = evenNumbersOnly(numbers);

console.log(evens);

function sumOfEvenNumbers(numbers) {
    let sum = 0;

    for(const number of numbers) {
        if(number % 2 == 0) {
            sum += number;
        }
    }

    return sum;
}

const sum = sumOfEvenNumbers(numbers);

console.log(sum);