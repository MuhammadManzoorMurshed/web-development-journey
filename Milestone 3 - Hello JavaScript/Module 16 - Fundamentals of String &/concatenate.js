const first = "Abid";
const last = "Navid";

const fullName = first + last;
console.log(fullName);

console.log("===========================");

const fullName1 = first + ' ' + last;
console.log(fullName1);

console.log("===========================");

const fullName2 = first.concat(last);
console.log(fullName2);

console.log("===========================");

const fullName3 = first.concat(' ').concat(last);
console.log(fullName3);

console.log("===========================");
console.log(last.includes('v'));
console.log(last.includes('l'));