const heights = [65, 66, 68, 72, 78, 60, 65, 660];


function getMax(numbers) {
    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (max < numbers[i]) {
            max = numbers[i];
        }
    }

    return max;
}

const max = getMax(heights);
console.log(max);