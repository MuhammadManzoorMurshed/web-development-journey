function make_avg(numbers, len) {
    let sum = 0;
    for(const number of numbers) {
        sum += number;
    }

    return sum / len;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const len = numbers.length;

console.log(make_avg(numbers, len));