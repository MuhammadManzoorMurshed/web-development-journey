console.log("One");
console.log("Two");

setTimeout(
    () => {
        console.log("New three inside setTimeout");
    }
, 5000);

setInterval(
    () => {
        console.log("Interval log every 3 seconds");
    }
, 3000);

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => console.log(users))
    .catch(error => console.error('Error fetching users:', error));

console.log("Four");
console.log("Five");

function logThree() {
    console.log("Three");
    }