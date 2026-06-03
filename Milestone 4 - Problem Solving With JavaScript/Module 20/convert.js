function inchToFeet (inch) {
    const feet = inch / 12;

    return feet;
}

let shuvoHeight = inchToFeet(75);
console.log(shuvoHeight);

console.log("===========================")

function inchToFeet1(inch) {
    const feetFrac = inch / 12;
    const feet = parseInt(feetFrac);
    const inchFinal = inch % 12;
    const result = feet + 'ft. ' + inchFinal + 'inch';

    return result;
}

shuvoHeight = inchToFeet1(75);
console.log(shuvoHeight);

console.log("===========================")

function milesToKilometer(mile) {
    const kilo = mile * 1.60934;

    return kilo;
}

console.log(milesToKilometer(5));

console.log("===========================")

function kilometerToMiles(kilo) {
    const mile = kilo * 0.621371;

    return mile;
}

console.log(kilometerToMiles(5));