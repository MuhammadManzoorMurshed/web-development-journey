const address = "Andarkilla";

const part = address.slice(0, 5);
console.log(part);

const part1 = address.slice(5, 10);
console.log(part1);

console.log("===========================");

const sentence = "I am a good and hardworking person.";
console.log(sentence.split());
console.log(sentence.split(''));
console.log(sentence.split(' '));
console.log(sentence.split('a'));

console.log("===========================");

const friends = "Rahim, Kahim, Dahim, Lahim, Fahim";
const friends1 = friends.split(',');

console.log(friends);
console.log(friends1);

console.log("===========================");

const friendsList = ['Ami', 'Tumi', 'Se', 'Tara'];

console.log(friendsList.join());
console.log(friendsList.join('|'));
console.log(friendsList.join(','));