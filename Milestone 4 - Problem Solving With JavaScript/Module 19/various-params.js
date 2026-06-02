function evenSizedStrig(str) {
    const size = str.length;

    console.log(size);
    console.log(str);

    if(size % 2 == 0) {
        console.log("Even sized")
    }
    else {
        console.log("Odd sized");
    }
    
}

evenSizedStrig('Dhaka');

function doubleOrTrippel(number, doDouble) {
    if(doDouble) {
        const result = number * 2;

        return result;
    }
    else {
        const result = number * 3;

        return result;
    }
}

console.log(doubleOrTrippel(5, true));
console.log(doubleOrTrippel(5, false));

function numberOfElements(numbers) {
    const len = numbers.length;

    return len;
}

console.log(numberOfElements([12, 45, 78, 123432, 4, 5]));

function getAge(person) {
    const age = person.age;

    return age;
}