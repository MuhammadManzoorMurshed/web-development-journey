console.log("Explore API");

const person = {
    name: "Selim",
    fruit: "Dalim",
    dish: "Halim",
    friends: ["Alim", "Kalim", "Lamim"],
    isRich: false,
    money: 34000
}

console.log(person);

console.log("---------------------------");

// JSON => JS Object Notation
// Convert to JSON
const personJSON = JSON.stringify(person);
console.log(personJSON);

console.log("---------------------------");

console.log(typeof person);
console.log(typeof personJSON);

console.log("---------------------------");

const parsedPersonJSON = JSON.parse(personJSON);
console.log(typeof parsedPersonJSON);
console.log(parsedPersonJSON);

console.log("---------------------------");