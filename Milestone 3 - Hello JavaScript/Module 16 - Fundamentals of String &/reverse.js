const sentence = "I want to learn web dev";

for(const letter of sentence) {
    console.log(letter);
}

console.log("===========================");

let reverse = '';

for (const letter of sentence) {
    reverse = letter + reverse;
}

console.log(reverse);

console.log("===========================");

for(let i = 0; i < sentence.length; i++) {
    console.log(i);
}

console.log("===========================");

for (let i = 0; i < sentence.length; i++) {
    console.log(i, ":", sentence[i]);
}

console.log("===========================");

let reverse1 = '';

for (let i = 0; i < sentence.length; i++) {
    reverse1 = sentence[i] + reverse1;
}

console.log(reverse1);

console.log("===========================");

const reverse3 = sentence.split('').reverse().join('');
console.log(reverse3);