const str = "Muahammad MAnzoor Murshed";

let count = 0;

console.log(str.includes('a'));
console.log(str.includes('e'));
console.log(str.includes('i'));
console.log(str.includes('o'));
console.log(str.includes('u'));

console.log("===========================");

const vowels = ['a', 'e', 'i', 'o', 'u'];

for(let i = 0; i < vowels.length; i++) {
    for(let j = 0; j < str.length; j++) {
        if(vowels[i] == str[j]) {
            count++;
            break;
        }
    }
}

if(count == vowels.length) {
    console.log(true);
}
else {
    console.log(false);
}

console.log("===========================");

for (let i = 0; i < vowels.length; i++) {
    for (let j = 0; j < str.length; j++) {
        if (vowels[i].includes(str[j])) {
            count++;
            break;
        }
    }
}

if (count == vowels.length) {
    console.log(true);
}
else {
    console.log(false);
}

console.log("===========================");

const hasAllVowels = /(?=.*a)(?=.*e)(?=.*i)(?=.*o)(?=.*u)/i.test(str);
console.log(hasAllVowels);