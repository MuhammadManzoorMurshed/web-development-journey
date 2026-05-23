
console.log("Even numbers: ");
for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

console.log("Odd numbers: ");
for (let i = 0; i < 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

console.log("Even numbers: ");
for (let i = 0; i < 20; i += 2) {
    console.log(i);
}

console.log("Even numbers: ");
for (let i = 1; i <= 30; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

console.log("Even numbers: ");
for (let i = 1; i <= 30; i++) {
    if (i % 5 === 0 || i % 3 === 0) {
        console.log(i);
    }
}

console.log("Even numbers: ");
for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(i);
    }
}

let total = 0;

console.log("Even numbers: ");
for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        total = total + i;
    }
}

console.log("Total sum: ", total);