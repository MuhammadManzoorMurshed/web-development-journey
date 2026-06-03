const heights2 = [167, 190, 120, 165, 137];

function min(numbers) {
    let minNumber = numbers[0];

    for(let i = 0; i < numbers.length; i++){
        if(minNumber > numbers[i]) {
            minNumber = numbers[i];
        }
    }

    return minNumber;
}

console.log(min(heights2));