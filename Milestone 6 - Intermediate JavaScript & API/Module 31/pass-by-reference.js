function multiply(x, y) {
    x = x + 5;
    y = y + 5;

    const mult = x * y;

    return mult;
}

let result = multiply(5, 7);
console.log(result);

console.log("-------------------------------");

const a = 3;
const b = 4;

console.log("a = ", a);
console.log("b = ", b);

result = multiply(a, b);
console.log(result);

console.log("a = ", a);
console.log("b = ", b);

console.log("-------------------------------");

const manik = {
    name: 'Manik',
    balance: 5000
}

const ratan = {
    naem: 'Ratan',
    balance: 40000
}

console.log("Before call:");
console.log("Manik: ", manik);
console.log("Ratan: ", ratan);

function totalMoney(person1, person2) {
    person1.balance = 0;
    person2.balance = person2.balance / 2;

    const total = person1.balance + person2.balance;

    return total;
}


const balance = totalMoney(manik, ratan);
console.log(balance);

console.log("After function call:");
console.log("Manik: ", manik);
console.log("Ratan: ", ratan);