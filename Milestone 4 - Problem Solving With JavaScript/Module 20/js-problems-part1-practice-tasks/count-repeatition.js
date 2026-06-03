function countRepeatiton(numbers, numberToCheck) {
    let count = 0;

    for(const number of numbers) {
        if(number === numberToCheck) {
            count++;
        }
    }

    return count;
}

const numbers = [5, 6, 11, 12, 98, 5, 11, 11];
console.log(countRepeatiton(numbers, 5));

const numbers1 = [5, 6, 11, 12, 98, 5]
console.log(countRepeatiton(numbers1, 25));