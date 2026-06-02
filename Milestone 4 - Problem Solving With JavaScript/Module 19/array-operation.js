function sumOfNumbers(numbers) {
    console.log(numbers);

    let sum = 0;

    for(const number of numbers) {
        console.log(number);

        sum += number;
    }

    return sum;
}

const nums = [54, 62, 12, 6];
const sum = sumOfNumbers(nums);
console.log('Sum of number is: ', sum);