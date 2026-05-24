const str = "Muahammad MAnzoor Murshed is A student.";

let count = 0;

for(let letter of str) {
    if(letter == 'a') {
        count++;
    }
}

console.log(count);

console.log("===========================");

count = 0;

for (let letter of str) {
    if (letter.toLocaleLowerCase() == 'a') {
        count++;
    }
}

console.log(count);

console.log("===========================");

count = str.split('a').length - 1;
console.log(count);

count = str.toUpperCase().split('A').length - 1;
console.log(count);

console.log("===========================");

count = (str.match(/a/g) || []).length;
console.log(count);

count = (str.match(/A/g) || []).length;
console.log(count);

count = (str.match(/a/gi) || []).length;
console.log(count);

console.log("===========================");

count = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i].toLocaleLowerCase() == 'a') {
        count++;
    }
}

console.log(count);

count = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] == 'a') {
        count++;
    }
}

console.log(count);

count = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] == 'A') {
        count++;
    }
}

console.log(count);

count = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i].toLocaleUpperCase() == 'A') {
        count++;
    }
}

console.log(count);