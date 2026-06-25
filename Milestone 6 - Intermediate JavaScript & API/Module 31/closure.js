function counter () {
    let count = 0;

    function innerfunction() {
        console.log("Inside the inner function. Someone called me.");
    }

    return innerfunction;
}

let output = counter();
console.log(output());

console.log("-------------------------------");

function counter1() {
    let count = 0;

    return function() {
        console.log("Inside the inner function counter1.")
    }
}

output = counter1();
console.log(output());

console.log("-------------------------------");

function counter2() {
    let count = 10;

    return function (user) {
        console.log("Inside the inner function counter2. User: ", user);
        console.log("count = ", count);

        count = count + 1;

        console.log("count = ", count);
    }
}

output = counter2();
console.log(output());

console.log("-------------------------------");

output();

console.log("-------------------------------");

output();

console.log("-------------------------------");

const rahimCounter = counter2();
rahimCounter("Rahim");

console.log("-------------------------------");

rahimCounter("Rahim");

console.log("-------------------------------");

rahimCounter("Rahim");

console.log("-------------------------------");

rahimCounter("Rahim");

console.log("-------------------------------");

const karimCounter = counter2();
karimCounter("Karim");

console.log("-------------------------------");

karimCounter("Karim");

console.log("-------------------------------");

karimCounter("Karim");

console.log("-------------------------------");

rahimCounter("Rahim");
karimCounter("Karim");