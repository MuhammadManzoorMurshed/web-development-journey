let str = "Capitalize Every first Letter of each word in a String";

console.log(str);

str = str.split(' ');

console.log(str);

console.log("===========================");

for(let i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].slice(1);
}

console.log(str);

console.log("===========================");

str = str.join(' ');

console.log(str);