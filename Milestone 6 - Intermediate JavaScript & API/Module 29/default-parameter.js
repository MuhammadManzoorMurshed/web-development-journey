function sum(num1, num2) {
    const total = num1 + num2;

    console.log(`The sum of ${num1} and ${num2} is ${total}`);
}

sum(5, 10); // The sum of 5 and 10 is 15

console.log('==========================');

sum(20); // The sum of 20 and undefined is NaN. undefined + number results in NaN.

console.log('==========================');

sum(15, 25, 35, 45); // The sum of 15 and 25 is 40

console.log('==========================');

// Using default parameters to avoid undefined values
function sumWithDefaults(num1, num2 = 0) {
    const total = num1 + num2;

    console.log(`The sum of ${num1} and ${num2} is ${total}`);
}

sumWithDefaults(5); // The sum of 5 and 0 is 5

console.log('==========================');

sumWithDefaults(20, 30); // The sum of 20 and 30 is 50

console.log('==========================');

sumWithDefaults(15, 25, 35, 45); // The sum of 15 and 25 is 40

console.log('==========================');

// Using default parameters with more complex defaults
function greet(name = "Guest", greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
}

greet(); // Hello, Guest!

console.log('==========================');

greet("Alice"); // Hello, Alice!

console.log('==========================');

greet("Bob", "Welcome"); // Welcome, Bob!

console.log('==========================');

greet(undefined, "Hi"); // Hi, Guest!

console.log('==========================');

greet(null, "Hey"); // Hey, null!

console.log('==========================');

// Default parameters with const objects
function createUser(name = "Anonymous", options = { role: "user", active: true }) {
    console.log(`Name: ${name}, Role: ${options.role}, Active: ${options.active}`);
}

createUser(); // Name: Anonymous, Role: user, Active: true

console.log('==========================');

createUser("John"); // Name: John, Role: user, Active: true

console.log('==========================');

createUser("Jane", { role: "admin", active: false }); // Name: Jane, Role: admin, Active: false

console.log('==========================');

createUser("Doe", { role: "moderator" }); // Name: Doe, Role: moderator, Active: undefined

console.log('==========================');

createUser("Smith", {}); // Name: Smith, Role: undefined, Active: undefined


// Default parameters with const arrays

function createPlaylist(name = "My Playlist", songs = ["Song1", "Song2"]) {
    console.log(`Playlist: ${name}, Songs: ${songs.join(", ")}`);
}

createPlaylist(); // Playlist: My Playlist, Songs: Song1, Song2

console.log('==========================');

createPlaylist("Chill Vibes"); // Playlist: Chill Vibes, Songs: Song1, Song2

console.log('==========================');

createPlaylist("Workout Mix", ["SongA", "SongB", "SongC"]); // Playlist: Workout Mix, Songs: SongA, SongB, SongC

console.log('==========================');

createPlaylist("Road Trip", []); // Playlist: Road Trip, Songs:

console.log('==========================');

createPlaylist("Favorites", undefined); // Playlist: Favorites, Songs: Song1, Song2

console.log('==========================');

createPlaylist("Classics", null); // This will throw an error because null is not an array