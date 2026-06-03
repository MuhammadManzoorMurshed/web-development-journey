function isLeapYear(year) {
    if(year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}

let leapYear = isLeapYear(2052);
console.log(leapYear);

console.log("===========================")

function isLeapYear1(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    }
    else if (year % 100 === 0 && year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}

leapYear = isLeapYear1(2100);
console.log(leapYear);
leapYear = isLeapYear1(2400);
console.log(leapYear);
leapYear = isLeapYear1(1900);
console.log(leapYear);
leapYear = isLeapYear1(2052);
console.log(leapYear);