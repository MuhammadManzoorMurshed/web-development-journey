console.log(1);
console.log(2);

let counter = 0;
// setInterval(
//     () => {
//         console.log(counter++);
//     }
// , 3000);

const setIntervalId = setInterval(
    () => {
        console.log(counter++);
    }
    , 3000);

console.log( "Set Interval ID:", setIntervalId );

// To stop the interval after some time (for example, after 10 seconds)
setTimeout(() => {
    clearInterval(setIntervalId);
    console.log("Interval cleared");
}, 10000);

console.log(4);
console.log(5);