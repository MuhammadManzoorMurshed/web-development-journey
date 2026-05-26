function hello() {
    console.log("I am a function.");
}

hello();

function moneyBag() {
    var money = 4500;

    console.log("I have " + money + " taka.");
}

moneyBag();

function add(num1, num2) {
    let sum = num1 + num2;

    console.log("Sum is ", sum);

    return sum;
}

add(5, 6);
add(50, 60);

const result = add(40, 10);
console.log(result);