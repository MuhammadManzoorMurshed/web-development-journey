function oddAverage(numbers) {
    let oddCount = 0;
    let oddSum = 0;
    for(const number of numbers) {
        if(number % 2 == 1) {
            oddCount++;
            oddSum += number;
        }
    }

    return oddSum / oddCount;
}

const numbers = [42, 13, 58, 65, 81];
const average = oddAverage(numbers);

console.log("Average of the odd numbers: ", average);

console.log("---------------------------")

function oddAverage1(numbers) {
    const odds = [];
    for (const number of numbers) {
        if (number % 2 == 1) {
            odds.push(number);
        }
    }
    
    let oddSum = 0;
    for(const number of odds) {
        oddSum += number;
    }

    return oddSum / odds.length;
}

const numbers1 = [42, 13, 58, 65, 81, 96, 7];
const average1 = oddAverage1(numbers1);

console.log("Average of the odd numbers: ", average1);