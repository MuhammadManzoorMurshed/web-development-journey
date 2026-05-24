const school = "RAJ UK Uttara Model School";

console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());

console.log("===========================")

const subject = "Chemistry";
const book = "chemistry";

if(subject == book) {
    console.log("I am reading book.");
}
else {
    console.log("Hudai hudai prishta paltai.");
}

console.log("===========================")

const subject1 = "Physics";
const book1 = "phySIcs";

if (subject == book) {
    console.log("I am reading book 1.");
}
else {
    console.log("Hudai hudai prishta paltai 1.");
}

console.log("===========================")

if (subject.toLowerCase() === book.toLowerCase()) {
    console.log("I am reading book 2.");
}
else {
    console.log("Hudai hudai prishta paltai 2.");
}

console.log("===========================")

const drink = 'water   ';
const liquid = '   water';

if(drink == liquid) {
    console.log("Panir opor nam life.");
}
else {
    console.log("Somudre pani ache, kaite pari na.");
}

console.log("===========================")

if (drink.trim() == liquid.trim()) {
    console.log("Panir opor nam life.");
}
else {
    console.log("Somudre pani ache, kaite pari na.");
}